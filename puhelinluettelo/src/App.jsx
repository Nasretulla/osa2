import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons  from "./Persons";
import servicePeople from './services/people'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [find, setFind] = useState("");

  useEffect(() => {
    console.log("use effect");
    servicePeople
    .getAll()
    .then(initialResponse => {
      setPersons(initialResponse);
    })
  }, [])
  console.log("render", persons.length, "persons");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNumber(event.target.value);
  };

  const handleFindChange= (event) =>{
    console.log(event.target.value);
    setFind(event.target.value);

  }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const uusHenkilo = { name: newName, numero: number };
      setPersons(persons.concat(uusHenkilo));
      setNewName("");


      servicePeople
      .create(uusHenkilo)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNumber('')
      });
    
    }
  };

  const addNumber = (event) => {
    event.preventDefault();
    const uusNumber = { name: newName, numero: number };
    setPersons(persons.concat(uusNumber));
    setNewName("");
    setNumber("");
  };

  const findPerson = persons.filter((person) =>
  person.name && person.name.toLowerCase().includes(find.toLowerCase())
);


  return (
    <div>
    <h2>Phonebook</h2>
    <div>
    <Filter value={find} onChange={handleFindChange}/>
     
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
      <Persons persons={findPerson} />
    </div>
  );
};

export default App;
