import { fireEvent, render, screen } from "@testing-library/react";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("+ 버튼과 - 버튼을 가지고 있다.", () => {
    render(<CountButton />);
    const incrementBtn = screen.getByTestId("incrementBtn");
    const decrementBtn = screen.getByTestId("decrementBtn");

    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
  });

  it("숫자 증감버튼 기능", () => {
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();
    render(<CountButton incrementFn={incrementFn} decrementFn={decrementFn} />);

    const incrementBtn = screen.getByTestId("incrementBtn");
    const decrementBtn = screen.getByTestId("decrementBtn");

    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);

    expect(incrementFn).toBeCalled();
    expect(decrementFn).toBeCalled();
  });
});
