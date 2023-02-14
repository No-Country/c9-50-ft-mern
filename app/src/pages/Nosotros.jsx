import { HeroNosotros } from '../components/nosotros/HeroNosotros'
import { Footer, Navbar } from '../components/shared'

export const Nosotros = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <HeroNosotros />
      <Footer />
    </div>
  )
}
