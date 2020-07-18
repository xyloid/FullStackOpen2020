import React, { useState } from "react";
import ReactDOM from "react-dom";

const randNum = (n) => Math.floor(Math.random() * n);

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;

const MaxVote = points=>points.indexOf(Math.max(...points))


const ShowAnecdote = ({anecdotes, selected, points})=>(
  <><p>{anecdotes[selected]}</p>
  <p>has vote {points[selected]}</p></>
)

const App = (props) => {
  const [selected, setSelected] = useState(randNum(anecdotes.length));

  const points_init = new Array(anecdotes.length).fill(0);

  const [points, setPoints] = useState(points_init);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdote anecdotes = {props.anecdotes} points = {points} selected = {selected}/>
      <Button
        handler={() => {
          let copy = [...points];
          copy[selected] += 1;
          setPoints(copy);
        }}
        text="vote"
      />
      <Button
        handler={() => {
          setSelected(randNum(anecdotes.length));
        }}
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      <ShowAnecdote anecdotes = {props.anecdotes} points = {points} selected = {MaxVote(points)}/>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
