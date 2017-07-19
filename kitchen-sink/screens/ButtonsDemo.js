import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
  H3,
  Content,
  Button,
} from 'carbon-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default function ButtonsDemo() {
  return (
    <Content>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" text="Stable" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="primary" text="Primary" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="secondary" text="Secondary" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="danger" text="Danger" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="dark" text="Dark" onPress={() => {}} />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Outline</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" text="Stable Outline" onPress={() => {}} outline />
        </View>
        <View style={cs.p}>
          <Button color="primary" text="Primary Outline" onPress={() => {}} outline />
        </View>
        <View style={cs.p}>
          <Button color="secondary" text="Secondary Outline" onPress={() => {}} outline />
        </View>
        <View style={cs.p}>
          <Button color="danger" text="Danger Outline" onPress={() => {}} outline />
        </View>
        <View style={cs.p}>
          <Button color="dark" text="Dark Outline" onPress={() => {}} outline />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Clear</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" text="Stable Clear" onPress={() => {}} clear />
        </View>
        <View style={cs.p}>
          <Button color="primary" text="Primary Clear" onPress={() => {}} clear />
        </View>
        <View style={cs.p}>
          <Button color="secondary" text="Secondary Clear" onPress={() => {}} clear />
        </View>
        <View style={cs.p}>
          <Button color="danger" text="Danger Clear" onPress={() => {}} clear />
        </View>
        <View style={cs.p}>
          <Button color="dark" text="Dark Clear" onPress={() => {}} clear />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Round</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" text="Stable Round" onPress={() => {}} round />
        </View>
        <View style={cs.p}>
          <Button color="primary" text="Primary Round" onPress={() => {}} round />
        </View>
        <View style={cs.p}>
          <Button color="secondary" text="Secondary Round" onPress={() => {}} round />
        </View>
        <View style={cs.p}>
          <Button color="danger" text="Danger Round" onPress={() => {}} round />
        </View>
        <View style={cs.p}>
          <Button color="dark" text="Dark Round" onPress={() => {}} round />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Block</H3>
      <View style={cs.padding}>
        <View style={cs.marginBottom}>
          <Button color="stable" text="Stable" onPress={() => {}} />
        </View>
        <View style={cs.marginBottom}>
          <Button color="primary" text="Primary" onPress={() => {}} />
        </View>
        <View style={cs.marginBottom}>
          <Button color="secondary" text="Secondary" onPress={() => {}} />
        </View>
        <View style={cs.marginBottom}>
          <Button color="danger" text="Danger" onPress={() => {}} />
        </View>
        <View style={cs.marginBottom}>
          <Button color="dark" text="Dark" onPress={() => {}} />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Full</H3>
      <View style={cs.paddingVertical}>
        <View style={cs.marginBottom}>
          <Button color="stable" text="Stable Full" onPress={() => {}} full />
        </View>
        <View style={cs.marginBottom}>
          <Button color="primary" text="Primary Full" onPress={() => {}} full />
        </View>
        <View style={cs.marginBottom}>
          <Button color="secondary" text="Secondary Full" onPress={() => {}} full />
        </View>
        <View style={cs.marginBottom}>
          <Button color="danger" text="Danger Full" onPress={() => {}} full />
        </View>
        <View style={cs.marginBottom}>
          <Button color="dark" text="Dark Full" onPress={() => {}} full />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Sizes</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" text="Stable Small" size="sm" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="primary" text="Primary Small" size="sm" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="secondary" text="Secondary Medium" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="danger" text="Danger Medium" onPress={() => {}} />
        </View>
        <View style={cs.p}>
          <Button color="dark" text="Dark Large" size="lg" onPress={() => {}} />
        </View>
      </View>

      <H3 style={styles.sectionHeader}>Icons</H3>
      <View style={cs.padding}>
        <View style={cs.p}>
          <Button color="stable" onPress={() => {}}>
            <Icon name="space-shuttle" size={22} /> Stable
          </Button>
        </View>
        <View style={cs.p}>
          <Button color="primary" onPress={() => {}}>
            <Icon name="home" size={22} /> Primary
          </Button>
        </View>
        <View style={cs.p}>
          <Button color="secondary" onPress={() => {}}>
            <Icon name="users" size={22} /> Secondary
          </Button>
        </View>
        <View style={cs.p}>
          <Button color="danger" onPress={() => {}}>
            <Icon name="pencil" size={22} /> Danger
          </Button>
        </View>
        <View style={cs.p}>
          <Button color="dark" onPress={() => {}}>
            <Icon name="trash" size={22} /> Dark
          </Button>
        </View>
      </View>
    </Content>
  );
}
