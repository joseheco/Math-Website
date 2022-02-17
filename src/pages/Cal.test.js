import { render } from '@testing-library/react';
import React from 'react';

test('Calculator page renders', () => {
  const tree = render(<calc />);
  expect(tree.toJSON).toMatchSnapshot();
});
