import { Button } from '../../../components/Button/';
import { render, screen } from '@testing-library/react';

it('Should render a Button', () => {
  render(<Button label="test button" />)
  let button = screen.getByText('test button')
  expect(button).toBeInTheDocument();
})
