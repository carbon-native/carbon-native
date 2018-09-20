import React from 'react';
import renderer from 'react-test-renderer';
const { Content: TestComponent } = process.env.TEST_DIST
  ? require('../dist')
  : require('../src');

jest.mock('ScrollView', () => 'ScrollView');

test('renders correctly', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
