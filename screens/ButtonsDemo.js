import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  carbonStyles,
  H3,
  Content,
  Container,
  Button,
  BR,
  FloatingActionButton,
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

export default function ButtonsDemo() {
  return (
    <Container>
      <FloatingActionButton
        onPress={() => alert("I am a Floating Action Button!")}
      >
        <Icon name="star" size={22} style={{ color: "white" }} />
      </FloatingActionButton>
      <Content>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="stable" text="Stable" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="primary" text="Primary" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="secondary" text="Secondary" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="danger" text="Danger" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="dark" text="Dark" onPress={() => {}} />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Outline</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              outline
              color="stable"
              text="Stable Outline"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              outline
              color="primary"
              text="Primary Outline"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              outline
              color="secondary"
              text="Secondary Outline"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              outline
              color="danger"
              text="Danger Outline"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              outline
              color="dark"
              text="Dark Outline"
              onPress={() => {}}
            />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Clear</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="stable"
              text="Stable Clear"
              onPress={() => {}}
              clear
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              clear
              color="primary"
              text="Primary Clear"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              clear
              color="secondary"
              text="Secondary Clear"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              clear
              color="danger"
              text="Danger Clear"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button clear color="dark" text="Dark Clear" onPress={() => {}} />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Round</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="stable"
              text="Stable Round"
              onPress={() => {}}
              round
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              round
              color="primary"
              text="Primary Round"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              round
              color="secondary"
              text="Secondary Round"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              round
              color="danger"
              text="Danger Round"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button round color="dark" text="Dark Round" onPress={() => {}} />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Block</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button block color="stable" text="Stable" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button block color="primary" text="Primary" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              block
              color="secondary"
              text="Secondary"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button block color="danger" text="Danger" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button block color="dark" text="Dark" onPress={() => {}} />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Full</H3>
        <View style={cs.paddingVertical}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button full color="stable" text="Stable Full" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              full
              color="primary"
              text="Primary Full"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              full
              color="secondary"
              text="Secondary Full"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button full color="danger" text="Danger Full" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button full color="dark" text="Dark Full" onPress={() => {}} />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Sizes</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="stable"
              text="Stable Small"
              size="sm"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="primary"
              text="Primary Small"
              size="sm"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="secondary"
              text="Secondary Medium"
              onPress={() => {}}
            />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="danger" text="Danger Medium" onPress={() => {}} />
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button
              color="dark"
              text="Dark Large"
              size="lg"
              onPress={() => {}}
            />
          </View>
        </View>

        <H3 style={styles.sectionHeader}>Icons</H3>
        <View style={cs.padding}>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="stable" onPress={() => {}}>
              <Text style={{ color: "black" }}>
                <Icon name="space-shuttle" size={22} /> Stable
              </Text>
            </Button>
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="primary" onPress={() => {}}>
              <Text style={{ color: "white" }}>
                <Icon name="home" size={22} /> Primary
              </Text>
            </Button>
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="secondary" onPress={() => {}}>
              <Text style={{ color: "black" }}>
                <Icon name="users" size={22} /> Secondary
              </Text>
            </Button>
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="danger" onPress={() => {}}>
              <Text style={{ color: "white" }}>
                <Icon name="pencil" size={22} /> Danger
              </Text>
            </Button>
          </View>
          <View style={[cs.row, cs.marginBottom]}>
            <Button color="dark" onPress={() => {}}>
              <Text style={{ color: "white" }}>
                <Icon name="trash" size={22} /> Dark
              </Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
}
