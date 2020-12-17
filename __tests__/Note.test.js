import React from "react";
import renderer from "react-test-renderer";
jest.mock("@expo/vector-icons/FontAwesome", () => "Icon");
jest.mock("@expo/vector-icons/Feather", () => "Icon");
const { Note: TestComponent } = process.env.TEST_DIST
  ? require("../dist")
  : require("../src");

test("renders correctly", () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
