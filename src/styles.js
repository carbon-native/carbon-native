import { StyleSheet, Platform } from 'react-native';
import MaterialColors from './material-colors';

// colors
// light, stable, primary, calm, secondary, energized, danger, royal, dark
export const colors = {
  light: '#fff',
  stable: '#f8f8f8',
  primary: '#337AF9',
  calm: '#11c1f3',
  secondary: '#22DD5E',
  energized: '#FFC600',
  danger: '#F83B36',
  royal: '#7E59FF',
  dark: '#222',
  ...MaterialColors,
};

export const carbonStyles = {
  // container
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  // list
  itemLast: {
    borderBottomWidth: 0,
  },
  itemHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  itemDivider: {
    backgroundColor: colors.stable,
  },
  itemDividerText: {
    fontWeight: 'bold',
  },

  // defaults:
  // - font size
  // - margin & padding: horizontal & vertical

  // typography
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },

  // colors
  // light, stable, primary, calm, secondary, energized, danger, royal, dark
  light: {
    color: colors.light,
  },
  lightBg: {
    backgroundColor: colors.light,
  },
  lightBgActive: {
    backgroundColor: colors.lightActive,
  },
  stable: {
    color: colors.stable,
  },
  stableBg: {
    backgroundColor: colors.stable,
  },
  stableBgActive: {
    backgroundColor: colors.stableActive,
  },
  primary: {
    color: colors.primary,
  },
  primaryBg: {
    backgroundColor: colors.primary,
  },
  primaryBgActive: {
    backgroundColor: colors.primaryActive,
  },
  calm: {
    color: colors.calm,
  },
  calmBg: {
    backgroundColor: colors.calm,
  },
  calmBgActive: {
    backgroundColor: colors.calmActive,
  },
  secondary: {
    color: colors.secondary,
  },
  secondaryBg: {
    backgroundColor: colors.secondary,
  },
  secondaryBgActive: {
    backgroundColor: colors.secondaryActive,
  },
  energized: {
    color: colors.energized,
  },
  energizedBg: {
    backgroundColor: colors.energized,
  },
  energizedBgActive: {
    backgroundColor: colors.energizedActive,
  },
  danger: {
    color: colors.danger,
  },
  dangerBg: {
    backgroundColor: colors.danger,
  },
  dangerBgActive: {
    backgroundColor: colors.dangerActive,
  },
  royal: {
    color: colors.royal,
  },
  royalBg: {
    backgroundColor: colors.royal,
  },
  royalBgActive: {
    backgroundColor: colors.royalActive,
  },
  dark: {
    color: colors.dark,
  },
  darkBg: {
    backgroundColor: colors.dark,
  },
  darkBgActive: {
    backgroundColor: colors.darkActive,
  },

  // margin
  margin: {
    margin: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  marginHorizontal: {
    marginHorizontal: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },

  // padding
  padding: {
    padding: 10,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingRight: {
    paddingRight: 10,
  },
  paddingBottom: {
    paddingBottom: 10,
  },
  paddingLeft: {
    paddingLeft: 10,
  },

  paddingLg: {
    padding: 15,
  },
  paddingXl: {
    padding: 20,
  },
};
