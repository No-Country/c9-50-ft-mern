import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login'
import { Recovery } from './Pages/Recovery'
import { Register } from './Pages/Register'
import { Home } from './Pages/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/recovery' element={<Recovery />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
