import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Recovery, Register, Chat } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Eleccion } from './pages/Eleccion'
import { AxiosInterceptor } from './utils'
import { Nosotros } from './pages/Nosotros'
import { Contacto } from './pages/Contacto'

AxiosInterceptor()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/eligetucolaborador' element={<Eleccion />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
      <ToastContainer icon theme='colored' />
    </BrowserRouter>
  )
}

export default App
