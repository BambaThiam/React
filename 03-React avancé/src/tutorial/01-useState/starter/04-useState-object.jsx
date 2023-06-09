import { useState } from 'react'

const data = [
  { id: 1, name: 'fatou', age: 35, hobby: 'commerce' },
  { id: 2, name: 'Ibrahima', age: 15, hobby: 'football' },
  { id: 3, name: 'Thomas', age: 55, hobby: 'Théatre' },
]

const UseStateObject = () => {
  // Initialidation des états
  // const [name, setName] = useState('Bamba')
  // const [age, setAge] = useState(34)
  // const [hobby, setHobby] = useState('computer vision')

  // const [person, setPerson] = useState({
  //   name: 'Moustapha',
  //   age: '27',
  //   hobby: 'digital',
  // })

  // const changePersonne = () => {
  //   data.map((person) => {
  //     setName(person.name)
  //     setAge(person.age)
  //     setHobby(person.hobby)
  //   })
  // }

  // const changePersonne = () => {
  //   setName('Daouda'), setAge(35), setHobby('Foot')
  // }
  const changePersonne = () => {
    setPerson({ name: 'Modou', age: 24, hobby: 'Football' })
  }

  return (
    <div>
      {/* <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2> */}
      {/* State est un objet dans le cas ci-dessous*/}
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button onClick={changePersonne}>Change</button>
    </div>
  )
}

export default UseStateObject
