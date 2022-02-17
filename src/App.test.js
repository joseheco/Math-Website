import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('match app snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
