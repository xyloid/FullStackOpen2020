import React from "react";

const Total = ({ course }) => {
  const sum = course.parts.reduce((total, part) => part.exercises + total, 0);
  return <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>;
};

export default Total;
