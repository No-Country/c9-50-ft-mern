import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Recovery, Register } from './Pages'

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
