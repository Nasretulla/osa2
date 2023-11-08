import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', numero: "044-7653278"},
   
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);

  }
  const handleNumberchange = (event) =>{
    console.log(event.target.value)
    setNumber(event.target.value)

  }

  const addPerson =(event)=>{
    event.preventDefault()
   if(persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const uusHenkilo = {name: newName, numero: number}
      setPersons(persons.concat(uusHenkilo))
      setNewName('')

    }

  }

  const addNumber = (event)=>{
    event.preventDefault();
    const uusNumber = { name: newName, numero: number}
 setPersons(persons.concat(uusNumber));
 setNewName('');
 setNumber('');


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}  />
          
        </div>
        <div>
          number: <input value={number} onChange={handleNumberchange}/>
          </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((henkilo) => (
      <p key={henkilo.name}>{henkilo.name} {henkilo.numero}</p>
     
      ))}
     
    </div>
  )

}

export default App