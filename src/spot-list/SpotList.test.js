import React from "react";
import SpotList from "./SpotList";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The SpotList component", () => {
  const props = {
    id: 1,
    venues: []
  };

  it("renders correctly", () => {
    const tree = renderer.create(<SpotList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<SpotList {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
