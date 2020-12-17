import React from "react";
import { StyleSheet, View } from "react-native";
import { carbonStyles, Content } from "../src/index.js";
import Icon from "@expo/vector-icons/FontAwesome";

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default function IconsDemo() {
  return (
    <Content padding>
      <View style={styles.row}>
        <Icon
          name="heart"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="th"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="smile-o"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="users"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="user"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="wheelchair"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="lock"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="key"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="unlock"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="map"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="location-arrow"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="map-marker"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="microphone"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="music"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="volume-up"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="coffee"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="calculator"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="train"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="camera"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="cube"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="picture-o"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="star"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="glass"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="map-marker"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>

      <View style={styles.row}>
        <Icon
          name="chevron-left"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="chevron-circle-down"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
        <Icon
          name="chevron-right"
          size={24}
          color="#333"
          style={[cs.container, cs.textCenter]}
        />
      </View>
    </Content>
  );
}
