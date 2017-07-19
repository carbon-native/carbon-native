import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  carbonStyles,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Content,
} from 'carbon-native';
const cs = StyleSheet.create(carbonStyles);

export default function TypographyDemo() {
  return (
    <Content padding>
      <H1>I'm an H1!</H1>
      <H2>I'm an H2!</H2>
      <H3>I'm an H3!</H3>
      <H4>I'm an H4!</H4>
      <H5>I'm an H5!</H5>
      <H6>I'm an H6!</H6>
      <P>I'm a paragraph with a some text!</P>
    </Content>
  );
}
