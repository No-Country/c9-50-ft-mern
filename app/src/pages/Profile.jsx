import { Navbar, Footer } from '../components'
import { UserProfile } from '../components/profile/UserProfile'
import { useEffect } from 'react'

// useEffect(()=>{
// console.log("Asdasd")
// }, [])
export const Profile = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <UserProfile/>
      <Footer />
    </div>
  )
}
