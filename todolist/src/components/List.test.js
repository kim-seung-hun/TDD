import { render, screen, fireEvent } from "@testing-library/react";
import List from "./List";

import context from "jest-plugin-context";

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks", () => {
    const tasks = [
      { id: 1, title: "부자되기" },
      { id: 2, title: "코딩열심히하기" },
    ];
    it("renders tasks", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("부자되기");
      expect(container).toHaveTextContent("코딩열심히하기");
    });

    // fireEvent
    it("renders 완료 buttons to delete a task", () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText("완료");

      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalledWith(1);
    });
  });

  context("without tasks", () => {
    it("renders no tasks message", () => {
      const tasks = [];

      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
