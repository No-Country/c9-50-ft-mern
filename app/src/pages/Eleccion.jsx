import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { Matchcolaborator } from '../components/matchcolaborador/matchcolaborator'

export const Eleccion = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Matchcolaborator />
      <Footer />
    </div>
  )
}
