import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const clickHandler = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)

  }

  const addPerson =(event)=>{
    event.preventDefault()
   if(persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const uusHenkilo = {name: newName}
      setPersons(persons.concat(uusHenkilo))
      setNewName('')

    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={clickHandler}  />
          
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((henkilo) => (
      <p key={henkilo.name}>{henkilo.name}</p>
      ))}
     
    </div>
  )

}

export default App