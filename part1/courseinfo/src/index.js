import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p key={props.item.name}>
      {props.item.name} {props.item.number}
    </p>
  );
};

const Content = (props) => {
  let items = [];
  console.log(props.elist);
  for (let item of props.elist) {
    items.push(<Part item={item} key={item.name} />);
  }
  console.log(items);
  return <>{items}</>;
};

const Total = (props) => {
  let sum = 0;
  for (let item of props.elist) {
    sum += item.number;
  }
  return <p>Number of exercises {sum}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  let exercises_list = [
    { name: part1, number: exercises1 },
    { name: part2, number: exercises2 },
    { name: part3, number: exercises3 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content elist={exercises_list} />
      <Total elist={exercises_list} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
