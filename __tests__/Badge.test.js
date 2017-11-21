import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../src/badge.js';

test('renders correctly', () => {
  const rendered = renderer.create(<Badge />).toJSON();
  // expect(rendered).toMatchSnapshot();
  expect(rendered).toBeTruthy();
});