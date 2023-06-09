import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ name: 'Bamba' })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there, {user.name}</h4>,
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        ((<h4>Please login</h4>),
        (
          <button className="btn" onClick={login}>
            login
          </button>
        ))
      )}
    </div>
  )
}

export default UserChallenge
