import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter component', () => {
  test('renders initial count of 0 by default', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });

  test('renders a custom initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 5');
  });

  test('increments the count when Increment is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  test('decrements the count when Decrement is clicked', () => {
    render(<Counter initialValue={2} />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  test('resets the count to the initial value', () => {
    render(<Counter initialValue={3} />);
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 5');

    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 3');
  });

  test('respects a custom step value', () => {
    render(<Counter step={5} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 5');

    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });
});
