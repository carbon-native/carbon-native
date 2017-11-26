import React from 'react';
import {
  Content,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  A,
  BR,
  Em,
  Small,
  Strong,
  S,
  Del,
  U,
  Ins,
  Mark,
} from '../src/index.js';

export default function TypographyDemo() {
  return (
    <Content padding>
      <H1>I'm an H1!</H1>
      <H2>I'm an H2!</H2>
      <H3>I'm an H3!</H3>
      <H4>I'm an H4!</H4>
      <H5>I'm an H5!</H5>
      <H6>I'm an H6!</H6>
      <P>I'm a paragraph with some text!</P>
      <A href="http://getcarbonnative.com">I'm a link!</A>
      <BR />
      <P>This line is preceeded by a break</P>
      <P>
        This line has a break<BR />
        before the end of the line.
      </P>
      <P>
        <Small>This line is small and is a great size for fine print.</Small>
      </P>
      <P>
        <Strong>This line is bold to indicate importance.</Strong>
      </P>
      <P>
        <Em>This line is italicized to indicate emphasis.</Em>
      </P>
      <P>
        <S>This line has a strikethrough, or a line through it.</S>
      </P>
      <P>
        <U>This line has an underline.</U>
      </P>
      <P>
        Use the Mark component to <Mark>highlight</Mark> text
      </P>
    </Content>
  );
}
