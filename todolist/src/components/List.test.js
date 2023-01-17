import { render, screen } from "@testing-library/react";
import List from "./List";

import tasks from "../../fixtures/tasks";

describe("List", () => {
  it("renders tasks", () => {
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent("부자되기");
    expect(container).toHaveTextContent("코딩열심히하기");
  });
});
