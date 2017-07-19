import React from 'react';

import {
  Container,
  Toolbar,
  ToolbarTitle,
  Content,
} from 'carbon-native';

export default function ToolbarsDemo() {
  return (
    <Container>
      <Content>
        <Toolbar color="primary">
          <ToolbarTitle color="light">Primary</ToolbarTitle>
        </Toolbar>
        <Toolbar color="secondary">
          <ToolbarTitle color="light">Secondary</ToolbarTitle>
        </Toolbar>
        <Toolbar color="danger">
          <ToolbarTitle color="light">Danger</ToolbarTitle>
        </Toolbar>
        <Toolbar color="stable">
          <ToolbarTitle color="dark">Light</ToolbarTitle>
        </Toolbar>
        <Toolbar color="dark">
          <ToolbarTitle color="light">Dark</ToolbarTitle>
        </Toolbar>
      </Content>

      <Toolbar color="primary">
        <ToolbarTitle color="light">Primary</ToolbarTitle>
      </Toolbar>
      <Toolbar color="secondary">
        <ToolbarTitle color="light">Secondary</ToolbarTitle>
      </Toolbar>
      <Toolbar color="danger">
        <ToolbarTitle color="light">Danger</ToolbarTitle>
      </Toolbar>
      <Toolbar color="stable">
        <ToolbarTitle color="dark">Light</ToolbarTitle>
      </Toolbar>
      <Toolbar color="dark">
        <ToolbarTitle color="light">Dark</ToolbarTitle>
      </Toolbar>
    </Container>
  );
}
