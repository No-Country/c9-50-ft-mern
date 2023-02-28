import { Navbar, Footer } from '../components'
import { FormUserChangePass } from '../components/profile/FormUserChangePass'

export const ChangePassword = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <FormUserChangePass />
      <Footer />
    </div>
  )
}
