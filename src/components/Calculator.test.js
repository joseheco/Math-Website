import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import React from 'react';
import Calculator from './Calculator';

test('Calculator renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree.toJSON).toMatchSnapshot();
});

test('test calculator UI', async () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  let testDisplay = await waitFor(() => screen.getByTestId('display'));
  expect(testDisplay.textContent).toMatch('5');
  fireEvent.click(screen.getByText('AC'));
  testDisplay = await waitFor(() => screen.getByTestId('display'));
  expect(testDisplay.textContent).toMatch('0');
});
