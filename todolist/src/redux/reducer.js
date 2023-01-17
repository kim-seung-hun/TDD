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
}
