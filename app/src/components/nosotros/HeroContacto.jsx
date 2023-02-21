import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export const HeroContacto = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row  max-w-full items-center justify-center mr-24 '>
        <div className='sm:w-4/5 flex justify-center 2xl:ml-24 '>
          <div className='flex flex-row justify-center gap-3 items-center md:items-start p-15  bg-gray-100 rounded-xl'>
            <div className='flex flex-col justify-center item-center p-20 pr-0'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl m-auto pt-8'>
              Contacto
            </h1>
            <p className='tracking-widest text-center m-auto pt-8'>
              ¿Deseas contactarte con nosotros? A continuación te compartimos nuestras vías de
              comunicación, junto con nuestro formulario para que nos envíes tus dudas o consultas.
            </p>
            <div className='m-auto pt-8'>
              <div className='flex gap-3  justify-start'>
                <FaPhoneAlt />
                <p className='tracking-widest'>Telefóno +1729303726</p>
              </div>
              <div className='flex gap-3  justify-start'>
                <FaInstagram />
                <p className='tracking-widest'>Instagram @meet.app</p>
              </div>
              <div className='flex gap-3  justify-start'>
                <FaFacebookSquare />
                <p className='tracking-widest'>Facebook @meet.app</p>
              </div>
              <div className='flex gap-3  justify-start'>
                <FaEnvelope />
                <p className='tracking-widest'>Email meet_app@gmail.com</p>
              </div>
            </div>
            </div>
            <div className='p-20 m-auto w-full'>
              <form className='mt-8 space-y-6' />
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-5'
                placeholder='Ingrese su nombre completo'
              />
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-5'
                placeholder='Ingrese su correo electronico'
              />
              <input
                id='number-phone'
                name='number-phone'
                type='number-phone'
                autoComplete='email'
                className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm m-5'
                placeholder='Ingrese su número telefónico'
              />
              <div>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest m-5'
                >
                  Envíar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
