import { render } from '@testing-library/react';
import React from 'react';
import Cal from './Cal';

test('Calculator page renders', () => {
  const tree = render(<Cal />);
  expect(tree.toJSON).toMatchSnapshot();
});
