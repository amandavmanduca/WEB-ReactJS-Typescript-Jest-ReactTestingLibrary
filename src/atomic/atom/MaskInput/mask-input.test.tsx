import { render, screen, cleanup } from '@testing-library/react';
import { MaskInput } from './index';
import renderer from 'react-test-renderer';
import { FormTemplate } from '../../template/FormTemplate';
import userEvent from '@testing-library/user-event';

afterEach(() => cleanup())

test('Should render mask input component', async () => {
    const onSubmit = () => jest.fn()
  render(
      <FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
          <MaskInput
            validate="string"
            mask={"00000"}
            name="test"
            label="Test"
          />
      </FormTemplate>
  )
  expect(screen.getByTestId('mask-input')).toBeInTheDocument()
});

test('Should recognize mask input initial value', async () => {
  const onSubmit = () => jest.fn()
render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {
          test: "12345"
        },
      }}
  >
        <MaskInput
          validate="string"
          mask={"00000"}
          name="test"
          label="Test"
        />
    </FormTemplate>
)
expect(screen.getByTestId('mask-input')).toHaveValue('12345')
});

test('Should recognize mask input value', async () => {
  const onSubmit = () => jest.fn()
render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
  >
        <MaskInput
          validate="string"
          mask={"00000"}
          name="test"
          label="Test"
        />
    </FormTemplate>
)
userEvent.type(screen.getByTestId('mask-input'), "22222")
expect(screen.getByTestId('mask-input')).toHaveValue('22222')
});

test('Should recognize updated mask input value', async () => {
  const onSubmit = () => jest.fn()
render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
  >
        <MaskInput
          validate="string"
          mask={"00000"}
          name="test"
          label="Test"
        />
    </FormTemplate>
)
userEvent.clear(screen.getByTestId('mask-input'))
userEvent.type(screen.getByTestId('mask-input'), "22222")
expect(screen.getByTestId('mask-input')).toHaveValue('22222')
});

test('Should display mask input validation error when null', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <MaskInput
        validate="string"
        mask={"00000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  expect(screen.getByTestId('mask-input-validation-error')).toBeInTheDocument()
});

test('Should not display mask input validation error when filled correctly', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {
          test: '12345'
        },
      }}
    >
      <MaskInput
        validate="string"
        mask={"00000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  expect(screen.queryByTestId('mask-input-validation-error')).not.toBeInTheDocument()
});

test('Should display mask input validation error when filled incorrectly', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <MaskInput
        validate="string|length:5"
        mask={"00000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  userEvent.type(screen.getByTestId('mask-input'), "123")
  expect(screen.getByTestId('mask-input-validation-error')).toBeInTheDocument()
});

test('Should only be able do digit numbers considering mask input options', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <MaskInput
        validate="string"
        mask={"00000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  userEvent.type(screen.getByTestId('mask-input'), "ABC")
  expect(screen.getByTestId('mask-input')).toHaveValue('')
});

test('Should only accept digit conforming mask input options', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <MaskInput
        validate="string"
        mask={"00000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  userEvent.type(screen.getByTestId('mask-input'), "ABC123")
  expect(screen.getByTestId('mask-input')).toHaveValue('123')
});

test('Should not be able to digit more than expected by mask validation', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <MaskInput
        validate="string|length:3"
        mask={"000"}
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  userEvent.type(screen.getByTestId('mask-input'), "12345")
  expect(screen.getByTestId('mask-input')).toHaveValue('123')
});

test('Mask input component should matches snapshot', async () => {
    const onSubmit = () => jest.fn()
    const tree = renderer.create(<FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
    >
          <MaskInput
            validate="string"
            mask={"00000"}
            name="test"
            label="Test"
          />
      </FormTemplate>).toJSON()
    expect(tree).toMatchSnapshot()
})
