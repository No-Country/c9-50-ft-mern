import { Footer, Hero, Navbar } from '../components'

export const Home = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
