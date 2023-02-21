import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { Matchcolaborator } from '../components/matchcolaborador/matchcolaborator'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChats } from '../redux/profile/thunks'

export const Eleccion = () => {
  const { token, name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChats(token, name))
  }, [])
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Matchcolaborator />
      <Footer />
    </div>
  )
}
