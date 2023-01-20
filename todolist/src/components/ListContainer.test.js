import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";

import ListContainer from "./ListContainer";

import tasks from "../../fixtures/tasks";

jest.mock("react-redux");

describe("ListContainer", () => {
  it("render tasks", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ tasks }));

    const { container, getAllByText } = render(<ListContainer />);

    expect(container).toHaveTextContent("부자되기");

    const button = getAllByText("완료");

    fireEvent.click(button[0]);

    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 },
    });
  });
});
