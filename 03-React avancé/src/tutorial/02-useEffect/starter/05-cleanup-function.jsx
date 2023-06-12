import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle ? (
        <div>
          <Randcomponent />
        </div>
      ) : (
        <h4>no test</h4>
      )}
    </div>
  )
}

const Randcomponent = () => {
  useEffect(() => {
    console.log("Humm, c'est intéressant...")
  }, [])
  return <h4>Test bien réussi</h4>
}

export default CleanupFunction
