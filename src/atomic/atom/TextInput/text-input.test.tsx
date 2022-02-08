import { render, screen, cleanup } from '@testing-library/react';
import { TextInput } from './index';
import renderer from 'react-test-renderer';
import { FormTemplate } from '../../template/FormTemplate';
import userEvent from '@testing-library/user-event';

afterEach(() => cleanup())

test('Should render text input component', async () => {
    const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
        <TextInput
          validate="string"
          name="test"
          label="Test"
        />
    </FormTemplate>
  )
  expect(screen.getByTestId('text-input')).toBeInTheDocument()
});

test('Should recognize text input initial value', async () => {
    const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {
          test: "Initial Value"
        },
      }}
    >
        <TextInput
          validate="string"
          name="test"
          label="Test"
        />
    </FormTemplate>
  )
  expect(screen.getByTestId('text-input')).toHaveValue('Initial Value')
});

test('Should recognize text input value', async () => {
    const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
        <TextInput
          validate="string"
          name="test"
          label="Test"
        />
    </FormTemplate>
  )
  userEvent.type(screen.getByTestId('text-input'), "Value")
  expect(screen.getByTestId('text-input')).toHaveValue('Value')
});

test('Should recognize text input value when updated', async () => {
    const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {
          test: 'Initial Value'
        },
      }}
    >
        <TextInput
          validate="string"
          name="test"
          label="Test"
        />
    </FormTemplate>
  )
  userEvent.clear(screen.getByTestId('text-input'))
  userEvent.type(screen.getByTestId('text-input'), "Updated Value")
  expect(screen.getByTestId('text-input')).toHaveValue('Updated Value')
});

test('Should display text input validation error when null', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {},
      }}
    >
      <TextInput
        validate="string"
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  expect(screen.getByTestId('text-input-validation-error')).toBeInTheDocument()
});

test('Should not display text input validation error when filled correctly', async () => {
  const onSubmit = () => jest.fn()
  render(
    <FormTemplate
      onCancel={jest.fn()}
      formProps={{
        onSubmit,
        initialValues: {
          test: 'Text with proper validation'
        },
      }}
    >
      <TextInput
        validate="string"
        name="test"
        label="Test"
      />
    </FormTemplate>
  )
  expect(screen.queryByTestId('text-input-validation-error')).not.toBeInTheDocument()
});

test('Text input component should matches snapshot', async () => {
    const onSubmit = () => jest.fn()
    const tree = renderer.create(<FormTemplate
        onCancel={jest.fn()}
        formProps={{
          onSubmit,
          initialValues: {},
        }}
      >
          <TextInput
            validate="string"
            name="test"
            label="Test"
          />
      </FormTemplate>).toJSON()
    expect(tree).toMatchSnapshot()
})
