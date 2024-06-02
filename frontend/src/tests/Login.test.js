import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';

test('renders Login component', () => {
  render(<Login />);
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});

test('allows the user to login successfully', () => {
  render(<Login />);

  fireEvent.change(screen.getByLabelText(/username/i), {
    target: { value: 'testuser' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password' }
  });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

});
