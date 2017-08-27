import 'react-native';
import React from 'react';
import Intro from '../Intro';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create( <
        Intro / >
    ).toJSON();
    expect(tree).toMatchSnapshot();
});