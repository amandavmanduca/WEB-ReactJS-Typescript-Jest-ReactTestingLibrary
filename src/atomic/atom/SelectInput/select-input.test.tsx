import { render, screen, cleanup } from '@testing-library/react';
import { SelectInput } from './index';
import renderer from 'react-test-renderer';
import { FormTemplate } from '../../template/FormTemplate';
import userEvent from '@testing-library/user-event';

afterEach(() => cleanup())

const options = [
    {
      value: "1",
      label:"Test 01",
    },
    {
      value: "2",
      label: "Test 02",
    }
  ]

test('Should render select input component', async () => {
    const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
          <SelectInput
            validate="string"
            name="test"
            label="Test"
            options={options}
          />
      </FormTemplate>
  )
  expect(screen.getByTestId('select-input')).toBeInTheDocument()
});


test('Select Input should have the corrent amount of options', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  expect(screen.getAllByRole('option').length).toBe(3)
});

test('Should recognize selected input initial value', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {
            test: '1'
          },
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  const option: any = screen.getByRole('option', { name: 'Test 01' })
  expect(option.selected).toBe(true);
});

test('Should recognize selected input value', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  userEvent.selectOptions(
    screen.getByTestId('select-input'),
    screen.getByRole('option', { name: 'Test 02' }),
  )
  const option: any = screen.getByRole('option', { name: 'Test 02' })
  expect(option.selected).toBe(true);
});

test('Should update correctly selected input value', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {
            test: '2'
          },
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  userEvent.selectOptions(
    screen.getByTestId('select-input'),
    screen.getByRole('option', { name: 'Test 01' }),
  )
  const option: any = screen.getByRole('option', { name: 'Test 01' })
  expect(option.selected).toBe(true);
});

test('Should display select input validation error when null', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  expect(screen.getByTestId('select-input-validation-error')).toBeInTheDocument()
});

test('Should not display select input validation error when filled correctly', async () => {
  const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {
            test: '1'
          },
        }}
    >
        <SelectInput
          validate="string"
          name="test"
          label="Test"
          options={options}
        />
      </FormTemplate>
  )
  expect(screen.queryByTestId('select-input-validation-error')).not.toBeInTheDocument()
});


test('Select input component should matches snapshot', async () => {
    const onSubmit = () => jest.fn()
    const tree = renderer.create(<FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
          <SelectInput
            validate="string"
            name="test"
            label="Test"
            options={options}
          />
      </FormTemplate>).toJSON()
    expect(tree).toMatchSnapshot()
})