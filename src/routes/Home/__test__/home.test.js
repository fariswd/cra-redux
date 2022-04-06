import React from "react";

import { fireEvent, render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Home from "..";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
    Link: jest.fn(),
  };
});

describe("Home test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Home />);
  });

  it("show as home", () => {
    expect(wrapper.getByText("this is home"));
  });

  it("has links to profile", () => {
    const navigate = useNavigate();
    const buttonLink = wrapper.getByText("to profile programatically");
    fireEvent.click(buttonLink);
    expect(navigate).toBeCalledWith("/profile", {
      state: { data: "this is data passing from home" },
    });
  });
});
