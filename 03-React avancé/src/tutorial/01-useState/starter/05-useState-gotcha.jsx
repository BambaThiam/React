import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  // const handleClick = () => {
  //   setValue(value + 1)
  //   console.log(setValue)
  // }

  const handleClick = () => {
    // setTimeout(() => {
    //   //console.log('Click button')
    //   setValue(value + 1)
    // }, 3000)
    setTimeout(() => {
      console.log('clicked the button')
      setValue((currentState) => {
        return currentState + 1
      })
    }, 3000)
  }
  return (
    <div>
      <h2>la nouvelle valeur est : {value}</h2>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default UseStateGotcha
