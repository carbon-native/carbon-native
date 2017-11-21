import React from 'react';
import renderer from 'react-test-renderer';
import { Badge as TestComponent } from '../src';

test('renders correctly', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  // expect(rendered).toMatchSnapshot();
  expect(rendered).toBeTruthy();
});