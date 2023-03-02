import { Navbar, Footer } from '../components'
import { UserCalendar } from '../components/calendar/UserCalendar'

export const Calendar = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <UserCalendar />
      <Footer />
    </div>
  )
}
