import { Link } from 'react-router-dom'
import hero from '../shared/img/hero.png'
export const Hero = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row  max-w-full items-center justify-between gap-20 p-5 '>
        <div className='md:w-3/6 flex justify-center 2xl:ml-24'>
          <div className='flex flex-col gap-3 items-center md:items-start p-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Todas tus citas en una sola app
            </h1>
            <p className='tracking-widest'>
              Aqui podras gestionar todas tus citas de manera sencilla y eficaz.
            </p>
            <Link
              to='/login'
              className='text-base font-semibold leading-7 text-textWhite bg-primary hover:bg-primaryHover py-3 px-6'
            >
              Prueba Gratis <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
        <div className='md:w-3/6'>
          <img src={hero} alt='' />
        </div>
      </div>
    </>
  )
}
