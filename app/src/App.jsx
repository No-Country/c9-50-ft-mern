import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Home,
  Login,
  Recovery,
  Register,
  Chat,
  Eleccion,
  SalaColaborador,
  NotFound,
  ColUrls,
  SalaChat,
  Profile,
  ChangePassword,
  Calendar
} from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AxiosInterceptor } from './utils'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes'
import { SocketsWrapper } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { startRememberUser } from './redux/auth/thunks'
import { useEffect } from 'react'

AxiosInterceptor()

function App() {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startRememberUser())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route element={<ProtectedRoutes isAllowed={status === 'authenticated'} />}>
          <Route
            path='/eligetucolaborador'
            element={
              <SocketsWrapper>
                <Eleccion />
              </SocketsWrapper>
            }
          />
          <Route
            path='/chat'
            element={
              <SocketsWrapper>
                <Chat />
              </SocketsWrapper>
            }
          />
          <Route
            path='/chat/:_id'
            element={
              <SocketsWrapper>
                <SalaChat />
              </SocketsWrapper>
            }
          />
          <Route
            path='/tusurls'
            element={
              <SocketsWrapper>
                <ColUrls />
              </SocketsWrapper>
            }
          />
          <Route
            path='/colaborador'
            element={
              <SocketsWrapper>
                <SalaColaborador />
              </SocketsWrapper>
            }
          />
            <Route
            path='/profile'
            element={
              <SocketsWrapper>
                <Profile/>
              </SocketsWrapper>
            }
            />
            <Route
            path='/calendar'
            element={
              <Calendar/>
            }
            />
            <Route
            path='/changePassword'
            element={
              <SocketsWrapper>
                <ChangePassword/>
              </SocketsWrapper>
            }
            />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer icon theme='colored' />
    </BrowserRouter>
  )
}

export default App
