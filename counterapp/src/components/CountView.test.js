import { render, screen } from "@testing-library/react";
import CountView from "./CountView";

describe("CountView", () => {
  it("현재 숫자를 보여줌", () => {
    let sampleCount = 0;
    render(<CountView count={sampleCount} />);
    const initialState = screen.getByText("현재 숫자 : 0");

    expect(initialState).toBeInTheDocument();

    sampleCount = 13;
    render(<CountView count={sampleCount} />);
    const countState = screen.getByText("현재 숫자 : 13");

    expect(countState).toBeInTheDocument();
  });
});
