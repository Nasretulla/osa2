import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import servicePeople from "./services/people";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [find, setFind] = useState("");

  useEffect(() => {
    console.log("use effect");
    servicePeople.getAll().then((initialResponse) => {
      setPersons(initialResponse);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const handleFindChange = (event) => {
    console.log(event.target.value);
    setFind(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
  
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirmUpdate) {
        const changedPerson = { ...existingPerson, numero: number };
        servicePeople.update(existingPerson.id, changedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPerson));
          })
          .catch(error => {
            // Käsittele virheitä täällä
            console.error('Error updating person:', error);
          });
      }
    } else {
      const newPerson = { name: newName, numero: number };
      servicePeople.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
        })
        .catch(error => {
          // Käsittele virheitä täällä
          console.error('Error adding person:', error);
        });
      setNewName('');
      setNumber('');
    }
  };
  

const paivitaHenkilo = (id,uudetTiedot) => {
  servicePeople
  .update(id,uudetTiedot)
  .then(response => {
    setPersons(persons => persons.map(person => person.id !== id ? person : response.data))

  })



}

  const poistaHenkilo = (id) => {
    const poistettava = persons.find((D) => D.id === id);
    if(window.confirm(`Delete ${poistettava.name}?` )){
      servicePeople.remove(id).then(() => {
        setPersons(persons.filter((D) =>D.id !== id));
      });
    }

  };
  const findPerson = persons.filter(
    (person) =>
      person.name && person.name.toLowerCase().includes(find.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter value={find} onChange={handleFindChange} />
      </div>
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        number={number}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={findPerson} 
        poistaHenkilo={poistaHenkilo}
      />
    </div>
  );
};

export default App;
