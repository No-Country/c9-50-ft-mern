import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
      </Routes>
      <ToastContainer icon theme='colored' />
    </BrowserRouter>
  )
}

export default App
