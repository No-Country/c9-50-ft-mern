import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Recovery } from './Pages/Recovery'
import { Register } from './Pages/Register'
import { Home } from './Pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

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
