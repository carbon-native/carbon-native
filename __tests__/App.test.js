import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../App';

// https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/642
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

it('renders without crashing', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
