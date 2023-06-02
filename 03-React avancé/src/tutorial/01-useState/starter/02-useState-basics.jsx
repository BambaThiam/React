import { useState } from 'react'

const UseStateBasics = () => {
  // const value = useState('Bamba')[0]
  // const handler = useState('Bamba')[1]
  // console.log(value)
  // console.log(handler)

  let [count, setCount] = useState(0)
  console.log(typeof count)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Tu as cliqué {count} fois</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Incrémente
      </button>
    </div>
  )
}

export default UseStateBasics
