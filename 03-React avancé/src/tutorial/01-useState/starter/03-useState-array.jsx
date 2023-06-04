import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  // Initialisation de l'état
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div id={id}>
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button onClick={() => setPeople([])}>Clear</button>
    </div>
  )
}

export default UseStateArray
