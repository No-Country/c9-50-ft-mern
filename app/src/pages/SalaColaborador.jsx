import { Navbar, Footer } from '../components'
import { ColaboradorWaiting } from '../components/colaborador/colaboradorWaiting'
export const SalaColaborador = () => {
  return (
    <div className='flex flex-col justify-between'>
      <Navbar />
      <ColaboradorWaiting />
      <Footer />
    </div>
  )
}
