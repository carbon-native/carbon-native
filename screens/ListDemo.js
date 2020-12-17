import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  carbonStyles,
  H3,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemHeaderText,
  ItemIcon,
  Note,
} from "../src/index.js";
import Icon from "@expo/vector-icons/FontAwesome";

const cs = StyleSheet.create(carbonStyles);
const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
  },
});

export default function ListDemo() {
  return (
    <Content>
      <List>
        <Item>
          <ItemContent>
            <ItemText>AC/DC</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Eagles</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Eminem</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Jay-Z</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Kanye West</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Led Zeppelin</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Madonna</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Michael Jackson</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Pink Floyd</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Taylor Swift</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>The Beatles</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>U2</ItemText>
          </ItemContent>
        </Item>
      </List>

      <H3 style={styles.sectionHeader}>No Lines</H3>
      <List>
        <Item>
          <ItemContent line={false}>
            <ItemText>AC/DC</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Eagles</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Eminem</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Jay-Z</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Kanye West</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Led Zeppelin</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Madonna</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Michael Jackson</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Pink Floyd</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>Taylor Swift</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false}>
            <ItemText>The Beatles</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent line={false} style={cs.itemLast}>
            <ItemText>U2</ItemText>
          </ItemContent>
        </Item>
      </List>

      <H3 style={styles.sectionHeader}>Dividers</H3>
      <List>
        <Item style={cs.itemDivider}>
          <ItemContent line={false}>
            <Text style={[cs.itemText, cs.itemDividerText]}>A</Text>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Abba</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>AC/DC</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Aerosmith</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Alabama</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Audioslave</ItemText>
          </ItemContent>
        </Item>

        <Item style={cs.itemDivider}>
          <ItemContent line={false}>
            <Text style={[cs.itemText, cs.itemDividerText]}>B</Text>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Bee Gees</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Beck</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Bob Marley</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Bon Jovi</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>Boston</ItemText>
          </ItemContent>
        </Item>
      </List>

      <H3 style={styles.sectionHeader}>Headers</H3>
      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>ROCK</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>AC/DC</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Led Zeppelin</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>Pink Floyd</ItemText>
          </ItemContent>
        </Item>
      </List>

      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>HIP-HOP</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Eminem</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Jay-Z</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>Kanye West</ItemText>
          </ItemContent>
        </Item>
      </List>

      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>POP</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Madonna</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Michael Jackson</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>Taylor Swift</ItemText>
          </ItemContent>
        </Item>
      </List>

      <H3 style={styles.sectionHeader}>Icons</H3>
      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>CLASSES</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="space-shuttle" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Astronomy</ItemText>
            <Note>To the moon</Note>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="male" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Muggle Studies</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="leaf" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Herbology</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="flask" size={24} />
          </ItemIcon>
          <ItemContent style={cs.itemLast}>
            <ItemText>Potions</ItemText>
            <Note>Poisonous</Note>
          </ItemContent>
        </Item>
      </List>

      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>ACTIVITIES</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="magic" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Incantation</ItemText>
            <Note>Crucio!</Note>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="paint-brush" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Quidditch Practice</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="glass" size={24} />
          </ItemIcon>
          <ItemContent style={cs.itemLast}>
            <ItemText>Mead Drinking</ItemText>
            <Note>Yes please</Note>
          </ItemContent>
        </Item>
      </List>

      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>FRIENDS</ItemHeaderText>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="bolt" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Harry</ItemText>
            <Note>The boy who lived</Note>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="book" size={24} />
          </ItemIcon>
          <ItemContent>
            <ItemText>Hermoine</ItemText>
            <Note>Muggle-born</Note>
          </ItemContent>
        </Item>

        <Item>
          <ItemIcon>
            <Icon name="beer" size={24} />
          </ItemIcon>
          <ItemContent style={cs.itemLast}>
            <ItemText>Ron</ItemText>
            <Note>Brilliant!</Note>
          </ItemContent>
        </Item>
      </List>
    </Content>
  );
}
