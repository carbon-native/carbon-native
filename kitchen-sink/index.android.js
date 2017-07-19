import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  carbonStyles,
  ToolbarTitle,
} from 'carbon-native';

import MainMenu from './screens/MainMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const cs = StyleSheet.create(carbonStyles);
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#3A3A3A',
  },
  navbarTitleWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarBackButton: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

function KitchenSink() {
  return (
    <View style={cs.container}>
      <StatusBar backgroundColor="#262626" />
      <Navigator
        style={cs.container}
        sceneStyle={{
          paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight,
        }}
        initialRoute={{
          component: MainMenu,
          title: 'Kitchen Sink',
          backButtonTitle: 'Back',
        }}
        configureScene={() =>
          Navigator.SceneConfigs.FloatFromBottom
        }
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
          return null;
        }}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navbar}
            routeMapper={{
              LeftButton: (route, navigator, index) => {
                if (index === 0) {
                  return null;
                }
                return (
                  <TouchableOpacity
                    onPress={() => navigator.pop()}
                    style={styles.navbarBackButton}
                  >
                    <Icon name="arrow-back" size={28} color="#fff" />
                  </TouchableOpacity>
                );
              },
              RightButton: () => null,
              Title: (route) => (
                <View style={styles.navbarTitleWrap}>
                  <ToolbarTitle color="light">
                    {route.title}
                  </ToolbarTitle>
                </View>
              ),
            }}
          />
        }
      />
    </View>
  );
}

AppRegistry.registerComponent('KitchenSink', () => KitchenSink);
