import { useSelector, useDispatch } from "react-redux";

import { render, screen } from "@testing-library/react";
import App from "./App";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  it("renders tasks", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ tasks }));

    const { container } = render(<App />);

    expect(container).toHaveTextContent("부자되기");
  });
});
