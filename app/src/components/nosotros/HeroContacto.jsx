// import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  name: z.string().min(2, { message: 'Name length must be longer than 2 characters' }),
  number: z.string().min(10, { message: 'The numer have to be more than 10 digits' }),
  message: z.string().min(1, { message: 'Required' })
})

export const HeroContacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit = (_data) => {
    toast.success('Mensaje Envíado !', {
      position: toast.POSITION.TOP_CENTER
    })
  }
  return (
    <>
      <div className='flex flex-col lg:flex-row  max-w-full items-center justify-center '>
        <div className='md:w-3/5 flex justify-center mb-5 mt-5'>
          <div className='flex flex-row justify-center gap-3 items-center md:items-start p-15  bg-gray-100 md:rounded-xl'>
            <div className='flex flex-col justify-center items-center p-8'>
              <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl m-auto pt-8'>
                Contacto
              </h1>
              <p className='tracking-widest text-center m-auto pt-8'>
                ¿Deseas contactarte con nosotros? A continuación te compartimos nuestras vías de
                comunicación, junto con nuestro formulario para que nos envíes tus dudas o
                consultas.
              </p>
              <div className='w-3/5 pt-8'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                  <input
                    id='name'
                    name='name'
                    type='name'
                    autoComplete='name'
                    className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm '
                    placeholder='Ingrese su nombre completo'
                    {...register('name', { required: true })}
                  />
                  {errors.name?.message && <p className='text-xs'>{errors.name?.message}</p>}
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm '
                    placeholder='Ingrese su correo electronico'
                    {...register('email', { required: true })}
                  />
                  {errors.email?.message && <p className='text-xs'>{errors.email?.message}</p>}
                  <input
                    id='number-phone'
                    name='number'
                    type='text'
                    autoComplete='number'
                    className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm '
                    placeholder='Ingrese su número telefónico'
                    {...register('number', { required: true })}
                  />
                  {errors.number?.message && <p className='text-xs'>{errors.number?.message}</p>}
                  <textarea
                    id='message'
                    name='message'
                    type='text'
                    className='relative block w-full h-20 appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='Ingrese su mensaje'
                    {...register('message', { required: true })}
                  />
                  {errors.message?.message && <p className='text-xs'>{errors.message?.message}</p>}
                  <button
                    type='submit'
                    className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest'
                  >
                    Envíar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* <div className='flex gap-3  justify-start'>
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
</div> */
