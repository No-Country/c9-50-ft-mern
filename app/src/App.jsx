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
import { ProtectedRoutes } from './components/protectedRoutes/ProtectedRoutes'
import { useSelector } from 'react-redux'

AxiosInterceptor()

function App() {
  const { status } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route element={<ProtectedRoutes isAllowed={status === 'authenticated'} />}>
          <Route path='/eligetucolaborador' element={<Eleccion />} />
          <Route path='/chat' element={<Chat />} />
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
