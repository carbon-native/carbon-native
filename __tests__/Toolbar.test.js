import 'react-native';
import React from 'react';
import Toolbar from '../dist/Toolbar';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<Toolbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
