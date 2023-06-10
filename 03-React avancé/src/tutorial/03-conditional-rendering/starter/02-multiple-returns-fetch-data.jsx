import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, seIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url)
        const user = await response.json()
        setUser(user)
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])
  return (
    <section>
      {
        // const {avatar_url, name, company, bio} = user
      }
    </section>
  )
}
export default MultipleReturnsFetchData
