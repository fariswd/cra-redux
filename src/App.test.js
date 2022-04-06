import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

jest.mock("react-router-dom", () => {
  return {
    Routes: jest.fn(),
    Route: jest.fn(),
  };
});

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // expect(getByText(/learn/i)).toBeInTheDocument();
});
