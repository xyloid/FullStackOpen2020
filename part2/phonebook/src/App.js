import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const isValid = (person) => {
    if (filter.trim() === 0) {
      return true;
    } else {
      return person.name.toLowerCase().includes(filter.toLowerCase());
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log(newName);

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (newName.length > 0) {
      setPersons(persons.concat({ name: newName, number: newPhoneNumber }));
    }

    setNewName("");
    setNewPhoneNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter changeHandler={handleFilterChange} pattern={filter} />

      <h3>Add a new </h3>
      <PersonForm
        nameHandler={handleNameChange}
        phoneHander={handlePhoneNumberChange}
        addHandler={addPerson}
        name={newName}
        phone={newPhoneNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={persons.filter((person) => isValid(person))} />
    </div>
  );
};

export default App;
