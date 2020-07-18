import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p key={props.item.name}>
      {props.item.name} {props.item.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.list.map((item) => (
        <Part item={item} key={item.name} />
      ))}
    </div>
  );
};

const Total = (props) => {
  let sum = props.list.reduce((s, item) => s + item.exercises, 0);
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content list={course.parts} />
      <Total list={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
