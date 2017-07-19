import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  // carbonStyles,
  Content,
} from 'carbon-native';
// const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  gridCol: {
    flex: 1,
    padding: 8,
  },
  colDemo: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#F7F7F7',
  },
  colDemoText: {
    textAlign: 'center',
  },
});

export default function GridDemo() {
  return (
    <Content>
      <View style={styles.gridRow}>
        <View style={styles.gridCol}>
          <View style={styles.colDemo}>
            <Text style={styles.colDemoText}>Col</Text>
          </View>
        </View>

        <View style={styles.gridCol}>
          <View style={styles.colDemo}>
            <Text style={styles.colDemoText}>Col</Text>
          </View>
        </View>

        <View style={styles.gridCol}>
          <View style={styles.colDemo}>
            <Text style={styles.colDemoText}>Col</Text>
          </View>
        </View>

        <View style={styles.gridCol}>
          <View style={styles.colDemo}>
            <Text style={styles.colDemoText}>Col</Text>
          </View>
        </View>
      </View>
    </Content>
  );
}
