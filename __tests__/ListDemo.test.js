import React from "react";
import renderer from "react-test-renderer";
import { ListDemo as TestComponent } from "../screens";
jest.mock("@expo/vector-icons/FontAwesome", () => "Icon");
jest.mock("@expo/vector-icons/Feather", () => "Icon");

test("renders correctly", () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
