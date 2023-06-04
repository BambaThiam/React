import { useState } from 'react'

const data = [
  { id: 1, name: 'fatou', age: 35, hobby: 'commerce' },
  { id: 2, name: 'Ibrahima', age: 15, hobby: 'football' },
  { id: 3, name: 'Thomas', age: 55, hobby: 'Théatre' },
]

const UseStateObject = () => {
  // Initialidation des états
  const [name, setName] = useState('Bamba')
  const [age, setAge] = useState(34)
  const [hobby, setHobby] = useState('computer vision')

  const changePersonne = () => {
    data.map((person) => {
      setName(person.name)
      setAge(person.age)
      setHobby(person.hobby)
    })
  }

  return (
    <div>
      <div>
        <h2>Nom : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Hobby : {hobby}</h2>
        <button onClick={changePersonne}>change</button>
      </div>

      {/* {data.map((person) => {
        return (
          <div>
            <h2>Nom : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Hobby : {hobby}</h2>
            <button onClick={() => changePersonne()}>change</button>
          </div>
        )
      })} */}
    </div>
  )
}

export default UseStateObject
