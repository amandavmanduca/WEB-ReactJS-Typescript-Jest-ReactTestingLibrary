import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DeviceType } from '../../../common/types';
import { DeviceForm } from './index';

afterEach(() => cleanup())

test('Expect device form inputs to be in the document', async () => {
  render(<DeviceForm
    initialValues={null}
    onSubmit={() => jest.fn()}
    onCancel={() => jest.fn()}
  />)

  expect(screen.getByRole('textbox', { name: 'Nome' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Serial' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'MAC Address' })).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: 'Tipo' })).toBeInTheDocument();
});

test('Should have the confirm button as disabled when form is null', async () => {
  render(<DeviceForm
    initialValues={null}
    onSubmit={() => jest.fn()}
    onCancel={() => jest.fn()}
  />);
  expect(await screen.findByRole('button', { name: 'Cadastrar' })).toBeDisabled();
});

test('Should have save button as enabled when edditing one device with form filled and no errors', async () => {
  render(<DeviceForm
    initialValues={{
      id: "123123",
      name: "teste",
      mac_address: "ASDASDDSA122",
      serial: "123123",
      type: DeviceType.CAMERA
    }}
    onSubmit={() => jest.fn()}
    onCancel={() => jest.fn()}
  />)
  expect(await screen.findByRole('button', { name: 'Salvar' })).toBeEnabled();
});

test('Should have confirm button as enabled when form is filled and has no errors', async () => {
  render(<DeviceForm
    initialValues={null}
    onSubmit={() => jest.fn()}
    onCancel={() => jest.fn()}
  />)
  userEvent.type(screen.getByRole('textbox', { name: 'Nome' }), "Teste")
  userEvent.type(screen.getByRole('textbox', { name: 'Serial' }), "123123")
  userEvent.type(screen.getByRole('textbox', { name: 'MAC Address' }), "123123321232")
  userEvent.selectOptions(
    screen.getByRole('combobox', { name: 'Tipo' }),
    screen.getByRole('option', { name: 'Câmera' }),
  )
  expect(await screen.findByRole('button', { name: 'Cadastrar' })).toBeEnabled();
});