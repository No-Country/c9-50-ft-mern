import { Navbar, Footer } from '../components'
import { UserProfile } from '../components/profile/UserProfile'

export const Profile = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <UserProfile />
      <Footer />
    </div>
  )
}
