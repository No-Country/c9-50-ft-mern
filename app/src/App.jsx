import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Home, Login, Recovery, Register } from './Pages'

const messages = 'Hello World!!'

function App() {
  return (
    <div>
      <h1 className='tracking-widest font-semibold'>{messages}</h1>
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
