import React from "react";
import { createNote, toggleImportanceOf } from "./reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

// const store = createStore(noteReducer);

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1,
//   },
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

const App = () => {
  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

// const renderApp = () => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// };

// renderApp();
// // store.subscribe(renderApp)

export default App;
