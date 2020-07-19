import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsServices.getAll().then((response) => setPersons(response));
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   setPersons(response.data);
    // });
  }, []);

  const isValid = (person) => {
    if (filter.trim() === 0) {
      return true;
    } else {
      return person.name.toLowerCase().includes(filter.toLowerCase());
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one ?`
        )
      ) {
        const toUpdate = persons.find((p) => p.name === newName);

        let newPerson = {
          ...toUpdate,
          number: newPhoneNumber,
        };

        personsServices.update(newPerson.id, newPerson).then((response) => {
          setPersons(
            persons.map((p) => (p.name === response.name ? response : p))
          );
        });
      }
    } else if (newName.length > 0) {
      let newPerson = {
        name: newName,
        number: newPhoneNumber,
      };
      personsServices
        .create(newPerson)
        .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));
    }

    setNewName("");
    setNewPhoneNumber("");
  };

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsServices.remove(person.id).then((response) => {
        setPersons(persons.filter((candi) => person.id !== candi.id));
      });
    }
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
      <Persons
        persons={persons.filter((person) => isValid(person))}
        deleteHandler={deletePerson}
      />
    </div>
  );
};

export default App;
