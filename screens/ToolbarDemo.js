import React from 'react';
import { Container, Toolbar, ToolbarTitle, Content } from '../src/index.js';

const items = [
  { color: 'primary', titleColor: 'light' },
  { color: 'secondary', titleColor: 'light' },
  { color: 'danger', titleColor: 'light' },
  { color: 'stable', titleColor: 'dark' },
  { color: 'dark', titleColor: 'light' },
];

const toolbars = items.map((item, index) => (
  <Toolbar color={item.color} key={item.color}>
    <ToolbarTitle color={item.titleColor}>
      {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
    </ToolbarTitle>
  </Toolbar>
));

export default function ToolbarDemo() {
  return (
    <Container>
      <Content>{toolbars}</Content>
      {toolbars}
    </Container>
  );
}
