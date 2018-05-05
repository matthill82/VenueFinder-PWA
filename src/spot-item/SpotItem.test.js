import React from "react";
import SpotItem from "./SpotItem";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The SpotItem component", () => {
  const props = {
    id: "d29348f",
    name: "test",
    address: "address",
    distance: 1234
  };

  it("renders correctly", () => {
    const tree = renderer.create(<SpotItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<SpotItem {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
