import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', numero: '040-123456' },
    { name: 'Ada Lovelace', numero: '39-44-5323523' },
    { name: 'Dan Abramov', numero: '12-43-234345' },
    { name: 'Mary Poppendieck', numero: '39-23-6423122' }
    
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [find, setFind] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberchange = (event) => {
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
 person.name.toLowerCase().includes(find.toLocaleLowerCase())
 
 )

  return (
    <div>
    <h2>Phonebook</h2>
    <div>
      filter shown with <input onChange={handleFindChange}></input>
    </div>
      <h2>add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberchange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {findPerson.map((henkilo) => (
        <p key={henkilo.name}>
          {henkilo.name} {henkilo.numero}
        </p>
      ))}
    </div>
  );
};

export default App;
