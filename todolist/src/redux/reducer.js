let init = {
  tasks: [],
};

export default function reducer(state = init, action) {
  const { type, payload } = action;

  if (type === "setTasks") {
    return {
      state,
      tasks: payload.tasks,
    };
  }

  if (type === "deleteTask") {
    return {
      state,
      tasks: state.tasks.filter((task) => task.id !== payload.id),
    };
  }
}
