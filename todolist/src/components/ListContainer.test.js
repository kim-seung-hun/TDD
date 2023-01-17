import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";

import ListContainer from "./ListContainer";

import tasks from "../../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  it("render tasks", () => {
    useSelector.mockImplementation((selector) => selector({ tasks }));

    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent("부자되기");
  });
});
