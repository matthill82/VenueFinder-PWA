/* eslint-disable */

import React from "react";
import Search from "./Search";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

it("Search app doesn't crash", () => {
  const component = shallow(<Search />);
  expect(component.exists()).toEqual(true);
});
