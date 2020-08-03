const noteReducer = (state = [], action) => {
  if (action.type === "NEW_NOTE") {
    return state.concat(action.data);
  }

  switch (action.type) {
    case "NEW_NOTE":
      return state.concat(action.data);
    case "TOGGLE_IMPORTANCE": {
      const id = action.data.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => (note.id === id ? changedNote : note));
    }
    default:
      return state;
  }
};
export default noteReducer;
