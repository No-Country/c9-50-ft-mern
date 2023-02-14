import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export const HeroContacto = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row  max-w-full items-center justify-center gap-20 p-40'>
        <div className='md:w-3/6 flex justify-center 2xl:ml-24'>
          <div className='flex flex-col justify-center gap-3 items-center md:items-start p-8  bg-gray-100 rounded-xl'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl m-auto pt-8'>
              Contacto
            </h1>
            <p className='tracking-widest text-center m-auto pt-8'>
              ¿Deseas contactarte con nosotros? A continuación te compartimos nuestras vías de
              comunicación para que nos dejes tus dudas o consultas
            </p>
            <div className='m-auto pt-8'>
              <div className='flex gap-3 flex-wrap justify-start'>
                <FaPhoneAlt />
                <p className='tracking-widest'>Telefóno +1729303726</p>
              </div>
              <div className='flex gap-3 flex-wrap justify-start'>
                <FaInstagram />
                <p className='tracking-widest'>Instagram @meet.app</p>
              </div>
              <div className='flex gap-3 flex-wrap justify-start'>
                <FaFacebookSquare />
                <p className='tracking-widest'>Facebook @meet.app</p>
              </div>
              <div className='flex gap-3 flex-wrap justify-start'>
                <FaEnvelope />
                <p className='tracking-widest'>Email meet_app@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
