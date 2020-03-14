import React from 'react';
import renderer from 'react-test-renderer';
import { ListDemo as TestComponent } from '../screens';

test('renders correctly', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
