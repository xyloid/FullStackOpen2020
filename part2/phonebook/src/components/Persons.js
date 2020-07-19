import React from "react";

const Persons = ({ persons, deleteHandler }) =>
  persons.map((person) => (
    <p key={person.name}>
      {person.name} {person.number}
      <button onClick={() => deleteHandler(person)}>delete</button>
    </p>
  ));

export default Persons;
