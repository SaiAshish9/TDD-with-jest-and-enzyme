import { render, screen } from "@testing-library/react";
import App from "./App";

import { shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    //  shallow will not go inside child react components
    // mount does
  });

  test("renders learn react link", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("a").text()).toContain("Learn");
    // toBe()
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render a btn increment", () => {
    expect(wrapper.find("#btn").text()).toBe("Inc");
    wrapper.find("#btn").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("1");
  });

  test("check initial value of counter", () => {
    expect(wrapper.find("#counter").text()).toBe("0");
  });
});
