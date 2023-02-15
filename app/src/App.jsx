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
  ColUrls
} from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { AxiosInterceptor } from './utils'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { startRememberUser } from './redux/auth/thunks'
import { SalaChat } from './pages/SalaChat'

AxiosInterceptor()

function App() {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  dispatch(startRememberUser())
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
          <Route path='/eligetucolaborador' element={<Eleccion />} />
          <Route path='/chat' element={<Chat />} />
        <Route path='/chatting' element={<SalaChat />} />
          <Route path='/tusurls' element={<ColUrls />} />
          <Route path='/colaborador' element={<SalaColaborador />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer icon theme='colored' />
    </BrowserRouter>
  )
}

export default App
