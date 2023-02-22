import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Footer } from '../components'
import { ColaboradorUrls } from '../components/colaborador/colaboradorurls'
import { getChats } from '../redux/profile/thunks'
export const ColUrls = () => {
  const { token, name } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChats(token, name))
  }, [])
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <ColaboradorUrls />
      <Footer />
    </div>
  )
}
