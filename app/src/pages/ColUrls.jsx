import { Navbar, Footer } from '../components'
import { ColaboradorUrls } from '../components/colaborador/colaboradorurls'

export const ColUrls = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <ColaboradorUrls />
      <Footer />
    </div>
  )
}
