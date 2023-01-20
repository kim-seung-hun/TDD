import reducer from "./reducer";

import { setTasks, deleteTask } from "../actions";

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

  describe("deleteTasks", () => {
    it("removes the task from tasks", () => {
      const state = reducer(
        {
          tasks: [{ id: 1, title: "부자되기" }],
        },
        deleteTask(1)
      );
      expect(state.tasks).toHaveLength(0);
    });
  });
});
