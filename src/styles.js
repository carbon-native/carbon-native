import {
  StyleSheet,
  Platform,
} from 'react-native';

// colors
// light, stable, primary, calm, secondary, energized, danger, royal, dark
export const colors = {
  light: '#fff',
  lightActive: '#fff', // @todo: update active color
  stable: '#f8f8f8',
  stableActive: '#e0e0e0',
  primary: '#337AF9',
  primaryActive: '#3474e1',
  calm: '#11c1f3',
  calmActive: '#11c1f3', // @todo: update active color
  secondary: '#22DD5E',
  secondaryActive: '#2ec95c',
  energized: '#FFC600',
  energizedActive: '#FFC600', // @todo: update active color
  danger: '#F83B36',
  dangerActive: '#e13838',
  royal: '#7E59FF',
  royalActive: '#7E59FF', // @todo: update active color
  dark: '#222',
  darkActive: '#343434',
};

export const carbonStyles = {

  // container
  container: {
    flex: 1,
    // backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  // typography
  h1: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 36,
  },
  h2: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 30,
  },
  h3: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 24,
  },
  h4: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 18,
  },
  h5: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 14,
  },
  h6: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 12,
  },
  p: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  a: {
    color: colors.primary,
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },

  // toolbar
  toolbar: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarHeader: {
    height: 64,
    paddingTop: 20,
  },
  toolbarFooter: {
    // stuff
  },
  toolbarTitle: {
    fontWeight: '600',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 20,
      },
    }),
  },
  toolbarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingRight: 6,
    paddingVertical: 8,
  },
  toolbarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingLeft: 6,
    paddingVertical: 8,
  },

  // button
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 2,
  },
  btnOutline: {
    borderWidth: 1,
  },
  btnClear: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  btnRound: {
    borderRadius: 50,
  },
  btnFull: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  },
  btnXsm: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  btnSm: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  btnTextSm: {
    fontSize: 12,
  },
  btnLg: {
    padding: 16,
  },
  btnTextLg: {
    fontSize: 20,
  },

  // list
  list: {
    // alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  itemLast: {
    borderBottomWidth: 0,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemText: {
    flex: 1,
    marginVertical: 12,
    fontSize: 17,
    fontWeight: '400',
  },
  itemIcon: {
    width: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  note: {
    fontSize: 14,
    color: '#AEACB4',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50,
  },
  badgeText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  itemNoLine: {
    borderBottomColor: 'transparent',
  },
  itemHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  itemHeaderText: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemDivider: {
    backgroundColor: colors.stable,
  },
  itemDividerText: {
    fontWeight: 'bold',
  },

  // card
  card: {
    // margin: 10,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#fff',
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
