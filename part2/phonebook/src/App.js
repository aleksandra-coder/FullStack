import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/personsdata'
import Notification from './components/Notification'


// ex 2.10
// extracting components from the application. all components then moved to its own modules
// const Person = ({ person }) => {
//   return (
//     <li>{person.name} {person.number}</li>
// )
// }

// const Filter = ({filterName, handleFilterChange}) => {
//    return (
//       <div>
//         filter shown with <input value={filterName}
//         onChange={handleFilterChange} />
//       </div>
//    )  
// }

// const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
//   return (
//     <form onSubmit={addPerson}>
//        <h2>add a new</h2>
//         <div>
//           name: <input value={newName}
//           onChange={handleNameChange}/>
//         </div>
//         <div>
//           number: <input value={newNumber}
//           onChange={handleNumberChange}/>
//           </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//   )
// }

// const Persons = ({filteredNames}) => {
//   return (
//     <div>
//       {filteredNames.map(person => 
//          <Person key={person.name}
//             person={person}></Person>
         
//           )}
//   </div>
//   )
// }


const App = () => {
  // ex 2.11 - empty array of useState
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterName, setFilter ] = useState('')
  const [ errorMessage, setErrorMessage] = useState(true)
  const [ message, setMessage] = useState(null)

  // ex 2.11 
  // initial state of the data is fetched from the server using the axios-library; effect hook
  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/persons')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setPersons(response.data)
  //     })
  // }, [])
  // console.log('render', persons.length, 'persons')

  useEffect(() => {
    // ex 2.16
    personService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    } 

    // ex 2.15 
    // adding data of new persons to the server
    // axios
    //   .post('http://localhost:3001/persons', nameObject)
    //   .then(response => {
    //     setPersons(persons.concat(response.data))
    //     setNewName('')
    //     setNewNumber('')
    //     console.log(response)
    // })

   
    // concat creates a new array in which the content of the old array and the new item are both included. 
    // setPersons(persons.concat(nameObject))
    // setNewName('')
    // setNewNumber('')
    // console.log('button clicked', event.target)

    // 2.18
    const person = persons.find(person => person.name.toLowerCase() === nameObject.name.toLowerCase())
    const changedNumber = { ...person, number: nameObject.number } 
     
    // ex 2.7
    // to prevent adding a new name if this name already exists:
     if (persons.some(person => person.name.toLowerCase() === nameObject.name.toLowerCase())) { 
      //  ex 2.18
      // replacling an old number with a new one, updating info of the person
        (window.confirm(`${newName} is already added to the phonebook. Replace the old number with the new one?`))
        personService
        .update(person.id, changedNumber)
        .then(updatedNumber => {
        setPersons(persons.map(person => person.name !== changedNumber.name ? person : updatedNumber))
        setMessage(
          `'${newName}' phone number is updated`
        )
        setErrorMessage(false)
        setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch (error => {
          setMessage(
            `'${newName}' phone number was not updated`
          )
          setErrorMessage(true)
          setTimeout(() => {
              setMessage(null)
            }, 5000)
         console.error('fail', error);
        })
    } else {
      // concat creates a new array in which the content of the old array and the new item are both included. 
    // ex 2.16
      personService
      .create(nameObject)
      .then(returnedName => {
        setPersons(persons.concat(returnedName)) 
        setMessage(
          `Person '${newName}' was added to the phonebook`
        ) 
        setErrorMessage(false)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      .catch (error => {
        setMessage(
          `Person '${newName}' was not added to the phonebook`
        ) 
        setErrorMessage(true)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        console.error('fail', error);
      })
    }
    setNewName(' ')
    setNewNumber(' ')
  }

  // ex 2.17 
  // deleting a name from the server
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
      .remove(id)
      .then(deletedName => {
        setPersons(persons.filter(person => person.id !== id ? person : !deletedName))
        setMessage(`the name '${name}' was deleted from server`) 
        setErrorMessage(false)
        console.log ('name deleted: ', name)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
    })
    .catch(error => {
      setMessage(
        `Person '${name}' was already deleted`
      )
      setErrorMessage(true)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    console.error('fail', error);
    setPersons(persons.filter(p => p.id !== id))
    })   
  }
}

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

// ex 2.9
// filtering (.filter) names to those including parts of already existing names (.includes method), case insensitive
const filteredNames = filterName === " "
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

 
  
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <div>
//         filter shown with <input value={filterName}
//         onChange={handleFilterChange} />
//       </div>
//       <form onSubmit={addPerson}>
//         <h2>add a new</h2>
//         <div>
//           name: <input value={newName}
//           onChange={handleNameChange}/>
//         </div>
//         <div>
//           number: <input value={newNumber}
//           onChange={handleNumberChange}/>
//           </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <ul>
//         {/* display all names, numbers */}
//       {/* {persons.map(person => 
//          <li key={person.name}>
//             {person.name} 
//             {person.number}
//          </li>
//           )} */}
//           {/* display only the filtered names, numbers */}
//            {filteredNames.map(person => 
//          <li key={person.name}>
//             {person.name} 
//             {person.number}
//          </li>
//           )}
//       </ul>
//     </div>
//   )
// }

// ex 2.10
// separated components
return (
  <div>
    <h1>Phonebook</h1>

    <Notification message={message} errorMessage={errorMessage}/>

    <Filter filterName={filterName} handleFilterChange={handleFilterChange} />

    <h3>Add a new</h3>

    <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} 
    handleNumberChange={handleNumberChange} /> 
      
    <h3>Numbers</h3>

    <Persons filteredNames={filteredNames} handleDelete={handleDelete} />
  </div>
)
}

export default App