# Carbon Native

**A set of UI components for building React Native apps**

## Get Started

```
npm install carbon-native --save
```

## Components

### Badges

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/badge.png" width="375" height="667" alt="Badge">

```
import {
  Badge,
} from 'carbon-native';

<Badge
  color="primary"
  text="4"
/>
```

### Buttons

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/buttons.png" width="375" height="667" alt="Buttons">

```
import {
  Button,
} from 'carbon-native';

<Button
  color="stable"
  text="Regular Button"
/>

<Button
  color="primary"
  text="Outline Button"
  outline
/>

<Button
  color="secondary"
  text="Clear Button"
  clear
/>
```

### Cards

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/cards.png" width="375" height="667" alt="Cards">

```
import {
  Card,
  H4,
} from 'carbon-native';

<Card>
  <H4>Header</H4>
  <Text>
    Just some text rambling on.
  </Text>
</Card>
```

### Icons

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/icons.png" width="375" height="667" alt="Icons">

```
npm install react-native-vector-icons --save
rnpm link
```

```
import Icon 'react-native-vector-icons/FontAwesome';

<Icon
  name="volume-down"
  size={24}
/>
```

### Lists

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/lists.png" width="375" height="667" alt="Lists">

```
import {
  Item,
  ItemIcon,
  ItemContent,
  ItemText,
  Note,
} from 'carbon-native';

<Item>
  <ItemIcon>
    <Icon name="bolt" size={24} />
  </ItemIcon>
  <ItemContent>
    <ItemText>Harry</ItemText>
    <Note>The boy who lived</Note>
  </ItemContent>
</Item>
```

### Range

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/range.png" width="375" height="667" alt="Range">

```
import {
  Range,
} from 'carbon-native';

<Range
  value={this.state.value}
  onValueChange={(value) => this.setState({ value })}
/>
```

### Toggle

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/toggle.png" width="375" height="667" alt="Toggle">

```
import {
  Toggle,
} from 'carbon-native';

<Toggle
  color="primary"
  onValueChange={(value) => this.setState({ toggleState: value })}
  value={this.state.toggleState}
/>
```

### Toolbars

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/toolbars.png" width="375" height="667" alt="Toolbars">

```
import {
  Toolbar,
  ToolbarTitle,
} from 'carbon-native';

<Toolbar color="primary">
  <ToolbarTitle color="light">Primary</ToolbarTitle>
</Toolbar>
```

### Typography

<img src="https://raw.githubusercontent.com/carbon-native/kitchen-sink/master/screenshots/typography.png" width="375" height="667" alt="Typography">

```
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
} from 'carbon-native';

<H1>I'm an H1!</H1>
<H2>I'm an H2!</H2>
<H3>I'm an H3!</H3>
<H4>I'm an H4!</H4>
<H5>I'm an H5!</H5>
<H6>I'm an H6!</H6>
<P>I'm a paragraph with a some text!</P>
```

## Contribute

https://github.com/carbon-native/carbon-native

## License

MIT License
