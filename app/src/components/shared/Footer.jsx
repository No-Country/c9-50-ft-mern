import { Link } from 'react-router-dom'
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine } from 'react-icons/ri'
export const Footer = () => {
  return (
    <div className='bg-black text-textWhite bottom-0 absolute w-full gap-20 px-20 py-5'>
      <div className='font-semibold tracking-widest'>
        <p>Descubre por qué somos la mejor Aplicacion para gestionar citas!</p>
      </div>
      <div className='flex'>
        <Link>Nosotros</Link>
        <Link className='ml-5'>Contacto</Link>
      </div>
      <div className='flex flex-row'>
        <div className='flex-grow'>&copy;Copyright</div>
        <div className='flex gap-2 items-center'>
          <RiYoutubeLine />
          <Link className='flex-row'>Youtube</Link>
          <RiFacebookBoxLine />
          <Link>Facebook</Link>
          <RiInstagramLine />
          <Link>Instagram</Link>
        </div>
      </div>
    </div>
  )
}
