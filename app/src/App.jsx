import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Recovery, Register } from './pages'
import { ToastContainer } from 'react-toastify'
import { AxiosInterceptor } from './utils'
import 'react-toastify/dist/ReactToastify.min.css'

AxiosInterceptor()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
      </Routes>
      <ToastContainer icon theme='colored' />
    </BrowserRouter>
  )
}

export default App
