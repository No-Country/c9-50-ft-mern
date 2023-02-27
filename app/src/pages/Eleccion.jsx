import { useEffect, useState } from 'react'
import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { Matchcolaborator } from '../components/matchcolaborador/matchcolaborator'
import { useSelector } from 'react-redux'
import axios from 'axios'

export const Eleccion = () => {
  const { token } = useSelector((state) => state.auth)
  const [connectedUsers, setConnetedUsers] = useState([])

  const getConnectedUsers = async () => {
    const { data } = await axios.get('/api/user/getconnectedusers', {
      headers: {
        Authorization: `Barer ${token}`
      }
    })
    setConnetedUsers(data.payload)
  }

  useEffect(() => {
    getConnectedUsers()
  }, [])

  return (
    <div className='flex flex-col justify-between'>
      <Navbar />
      <Matchcolaborator users={connectedUsers} />
      <Footer />
    </div>
  )
}
