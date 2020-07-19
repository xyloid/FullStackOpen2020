import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log(newName);

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName.length > 0) {
      setPersons(persons.concat({ name: newName }));
    }

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button onClick={addPerson} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
