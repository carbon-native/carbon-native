import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content,
  Toolbar,
  ToolbarTitle,
  ToolbarLeft,
  ToolbarRight,
  P,
  Button,
  colors,
} from '../src/index.js';
import Icon from '@expo/vector-icons/Feather';

const items = [
  { color: 'primary', titleColor: 'light' },
  { color: 'secondary', titleColor: 'light' },
  { color: 'danger', titleColor: 'light' },
  { color: 'stable', titleColor: 'dark' },
  { color: 'dark', titleColor: 'light' },
];

export default function ToolbarDemo() {
  return (
    <Container>
      <Toolbar color="stable">
        <ToolbarLeft />

        <ToolbarTitle color="dark">Secondary Toolbar</ToolbarTitle>

        <ToolbarRight>
          <Button clear size="xs" onPress={() => alert('Settings')}>
            <Icon name="settings" size={24} style={{ color: colors.primary }} />
          </Button>
        </ToolbarRight>
      </Toolbar>

      <Content padding>
        <P>Some content</P>
      </Content>

      <Toolbar color="stable">
        <ToolbarLeft>
          <Button clear size="xs" onPress={() => alert('Undo')}>
            <Icon
              name="rotate-ccw"
              size={24}
              style={{ color: colors.primary }}
            />
          </Button>
        </ToolbarLeft>

        <ToolbarTitle color="dark">Footer Toolbar</ToolbarTitle>

        <ToolbarRight>
          <Button clear size="xs" onPress={() => alert('Create new document')}>
            <Icon name="edit" size={24} style={{ color: colors.primary }} />
          </Button>
        </ToolbarRight>
      </Toolbar>
    </Container>
  );
}
