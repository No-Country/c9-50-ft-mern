import { Link } from 'react-router-dom'
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine } from 'react-icons/ri'
export const Footer = () => {
  return (
    <div className='bg-black text-textWhite  w-full px-20 flex-col gap-2 py-5 flex'>
      <div>
        <p className='font-semibold'>
          Descubre por qué somos la mejor Aplicacion para gestionar citas!
        </p>
      </div>
      <div>
        <div className='flex gap-4 lg:text-xl'>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/contacto'>Contacto</Link>
        </div>
      </div>
      <div className='flex md:flex-row flex-col gap-2 text-xs'>
        <div className='flex-grow'>© 2023 Copyright</div>
        <div className='flex gap-2 flex-wrap justify-start'>
          <div className='flex items-center gap-1'>
            <RiYoutubeLine />
            <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
              Youtube
            </a>
          </div>
          <div className='flex items-center gap-1'>
            <RiFacebookBoxLine />
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
              Facebook
            </a>
          </div>
          <div className='flex items-center gap-1'>
            <RiInstagramLine />
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
