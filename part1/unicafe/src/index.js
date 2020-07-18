import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({good, neutral, bad})=>{

  let sum = good + neutral + bad;
  let average = (good - bad)/sum;
  let positive = good / sum;
  return (<div>
    <h2>statistics</h2>
  <p>good {good}</p>
  <p>neutral {neutral}</p>
  <p>bad {bad}</p>
  <p>average {average}</p>
  <p>positive {positive} %</p>
  </div>
  )
};



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
