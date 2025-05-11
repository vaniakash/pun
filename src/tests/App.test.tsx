import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App component', () => {
  test('renders Punjikalens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Punjikalens/i);
    expect(titleElement).toBeInTheDocument();
  });
}); 