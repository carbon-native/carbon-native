# Carbon Native

**A set of UI components for building React Native apps**

[![CircleCI](https://circleci.com/gh/carbon-native/carbon-native.svg?style=svg)](https://circleci.com/gh/carbon-native/carbon-native)

**Demo App:**

- [Expo](https://expo.io/@tylerbuchea/carbon-native-kitchen-sink)
- [Apple App Store](https://itunes.apple.com/us/app/carbon-native-kitchen-sink/id1137214677)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.getcarbonnative.kitchensink)

## Get Started

```sh
yarn add carbon-native
```

## Components

### Badge

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/badge.png" width="375" height="auto" alt="Badge">

```jsx
import {
  Badge,
} from 'carbon-native';

<Badge
  color="primary"
  text="4"
/>
```

### Buttons

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/buttons.png" width="375" height="auto" alt="Buttons">

```jsx
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

### Card

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/card.png" width="375" height="auto" alt="Card">

```jsx
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

### Lists

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/lists.png" width="375" height="auto" alt="Lists">

```jsx
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

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/range.png" width="375" height="auto" alt="Range">

```jsx
import {
  Range,
} from 'carbon-native';

<Range
  value={this.state.value}
  onValueChange={(value) => this.setState({ value })}
/>
```

### Toggle

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/toggle.png" width="375" height="auto" alt="Toggle">

```jsx
import {
  Toggle,
} from 'carbon-native';

<Toggle
  color="primary"
  onValueChange={(value) => this.setState({ toggleState: value })}
  value={this.state.toggleState}
/>
```

### Toolbar

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/toolbar.png" width="375" height="auto" alt="Toolbar">

```jsx
import {
  Toolbar,
  ToolbarTitle,
} from 'carbon-native';

<Toolbar color="primary">
  <ToolbarTitle color="light">Primary</ToolbarTitle>
</Toolbar>
```

### Typography

<img src="https://raw.githubusercontent.com/carbon-native/carbon-native/master/screenshots/typography.png" width="375" height="auto" alt="Typography">

```jsx
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  BR,
  Em,
  Small,
  Strong,
  S,
  U,
} from 'carbon-native';

<H1>I'm an H1!</H1>
<H2>I'm an H2!</H2>
<H3>I'm an H3!</H3>
<H4>I'm an H4!</H4>
<H5>I'm an H5!</H5>
<H6>I'm an H6!</H6>
<P>I'm a paragraph with some text!</P>
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
```

## Contribute

[Contribution guidelines for this project](CONTRIBUTING.md)

## License

[MIT License](LICENSE)
