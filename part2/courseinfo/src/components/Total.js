import React from "react";

const Total = ({ course }) => {
  const sum = course.parts.reduce((total, part) => part.exercises + total, 0);
  return <p>Number of exercises {sum}</p>;
};

export default Total;
