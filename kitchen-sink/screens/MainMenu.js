import React, {
  Component,
} from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemIcon,
} from 'carbon-native';

import AlertsDemo from '../screens/AlertsDemo';
import BadgesDemo from '../screens/BadgesDemo';
import ButtonsDemo from '../screens/ButtonsDemo';
import CardsDemo from '../screens/CardsDemo';
import GridDemo from '../screens/GridDemo';
import IconsDemo from '../screens/IconsDemo';
import ListsDemo from '../screens/ListsDemo';
import ModalDemo from '../screens/ModalDemo';
import RangeDemo from '../screens/RangeDemo';
import ToggleDemo from '../screens/ToggleDemo';
import ToolbarsDemo from '../screens/ToolbarsDemo';
import TypographyDemo from '../screens/TypographyDemo';

import Icon from 'react-native-vector-icons/FontAwesome';

const cs = StyleSheet.create(carbonStyles);

const propTypes = { navigator: React.PropTypes.object };
export default class MainMenu extends Component {

  constructor(props) {
    super(props);
    this.navTo = this.navTo.bind(this);
  }

  navTo(page, title) {
    this.props.navigator.push({
      component: page,
      title,
    });
  }

  render() {
    const demos = [
      {
        name: 'Alerts',
        screen: AlertsDemo,
        icon: 'exclamation-triangle',
      },
      {
        name: 'Badges',
        screen: BadgesDemo,
        icon: 'certificate',
      },
      {
        name: 'Buttons',
        screen: ButtonsDemo,
        icon: 'circle',
      },
      {
        name: 'Cards',
        screen: CardsDemo,
        icon: 'clone',
      },
      {
        name: 'Grid',
        screen: GridDemo,
        icon: 'th',
      },
      {
        name: 'Icons',
        screen: IconsDemo,
        icon: 'heart',
      },
      {
        name: 'Lists',
        screen: ListsDemo,
        icon: 'list',
      },
      {
        name: 'Modal',
        screen: ModalDemo,
        icon: 'sticky-note-o',
      },
      {
        name: 'Range',
        screen: RangeDemo,
        icon: 'sliders',
      },
      {
        name: 'Toggle',
        screen: ToggleDemo,
        icon: 'toggle-on',
      },
      {
        name: 'Toolbars',
        screen: ToolbarsDemo,
        icon: 'bars',
      },
      {
        name: 'Typography',
        screen: TypographyDemo,
        icon: 'font',
        lastItem: true,
      },
    ];
    return (
      <Content>
        <List>
          { demos.map((demo) =>
            <Item
              key={demo.screen}
              onPress={() => this.navTo(demo.screen, demo.name)}
            >
              <ItemIcon>
                <Icon name={demo.icon} size={24} />
              </ItemIcon>
              <ItemContent style={demo.lastItem && cs.itemLast}>
                <ItemText>{demo.name}</ItemText>
              </ItemContent>
            </Item>
          ) }
        </List>
      </Content>
    );
  }

}
MainMenu.propTypes = propTypes;
