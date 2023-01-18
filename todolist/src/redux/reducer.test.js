import reducer from "./reducer";

import { setTasks } from "../actions";

import tasks from "../../fixtures/tasks";

// tdd 연습
describe("reducer", () => {
  describe("setTasks", () => {
    it("change tasks array", () => {
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );
      expect(state.tasks).not.toHaveLength(0);
    });
  });
});
