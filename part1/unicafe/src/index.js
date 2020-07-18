import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);


const Statistic = ({text,value})=>(
<p>{text} {value}</p>
)

const Statistics = ({good, neutral, bad})=>{

  let sum = good + neutral + bad;

  if (sum > 0){
    let average = (good - bad)/sum;
    let positive = good / sum * 100;
    return (<div>
      <h2>statistics</h2>
    <Statistic text = "good" value = {good}/>
    <Statistic text = "neutral" value = {neutral}/>
    <Statistic text = "bad" value = {bad}/>
    <Statistic text = "all" value = {sum}/>
    <Statistic text = "average" value = {average}/>
    <Statistic text = "positive" value = {positive + " %"}/>
    </div>
    )
  }else{
    return (<div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>)
  }

  
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
