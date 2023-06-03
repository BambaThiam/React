import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
    data.filter(person)
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </div>
  )
}

export default UseStateArray
