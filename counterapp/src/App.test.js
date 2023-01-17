import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("CountView와 CountButton render 되는지 check", () => {
    render(<App />);
    const view = screen.getByText("현재 숫자 : 0");
    const buttons = screen.getAllByRole("button");

    expect(view).toBeInTheDocument();
    expect(buttons.length).toBe(2);
  });

  it("+ 버튼을 누르면 1씩 증가 기능", () => {
    render(<App />);
    const initialScreen = screen.getByText("현재 숫자 : 0");
    expect(initialScreen).toBeInTheDocument();

    const incrementBtn = screen.getByTestId("incrementBtn");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    const changeScreen = screen.getByText("현재 숫자 : 3");
    expect(changeScreen).toBeInTheDocument();
  });

  it("- 버튼을 누르면 1씩 감소 기능", () => {
    render(<App />);
    const initialScreen = screen.getByText("현재 숫자 : 0");
    expect(initialScreen).toBeInTheDocument();

    const decrementBtn = screen.getByTestId("decrementBtn");

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    const changeScreen = screen.getByText("현재 숫자 : -2");
    expect(changeScreen).toBeInTheDocument();
  });
});
