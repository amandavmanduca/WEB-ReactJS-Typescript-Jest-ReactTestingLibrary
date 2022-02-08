import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Button } from './index';
import renderer from 'react-test-renderer';

afterEach(() => cleanup())

test('Should render button component', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Test Button</Button>)
  const button = screen.getByTestId('button')

  expect(button).toBeInTheDocument()
  expect(button).toBeEnabled()
  expect(button).toHaveTextContent('Test Button')
});

test('Should call function when clicking button component', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Test Button</Button>)
  const button = screen.getByTestId('button')
  fireEvent.click(button)
  expect(button).toBeEnabled()
  expect(handleClick).toBeCalled()
});

test('Should render button component as disabled', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick} disabled={true}>Test Button</Button>)
  const button = screen.getByTestId('button')
  expect(button).toBeDisabled()
});

test('Button component should matches snapshot', async () => {
    const tree = renderer.create(<Button onClick={() => console.log('clicking button')}>Test Button</Button>).toJSON()
    expect(tree).toMatchSnapshot()
})
