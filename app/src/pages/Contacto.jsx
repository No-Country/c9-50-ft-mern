import { Footer, Navbar } from '../components'
import { HeroContacto } from '../components/nosotros/HeroContacto'

export const Contacto = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
    <Navbar/>
      <HeroContacto/>
      <Footer/>
    </div>
  )
}
