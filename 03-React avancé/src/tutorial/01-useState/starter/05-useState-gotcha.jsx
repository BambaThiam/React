import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
    console.log(setValue)
  }
  return (
    <div>
      <h2>la nouvelle valeur est : {value}</h2>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default UseStateGotcha
