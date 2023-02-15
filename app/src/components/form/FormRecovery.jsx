import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch } from 'react-redux'
import { startRecovery } from '../../redux/auth/thunks'

const schema = z.object({
  email: z.string().min(1, { message: 'Required' }).email({ message: 'Invalid email address' })
})

export const FormRecovery = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })
  const onSubmit = (data, e) => {
    e.target.reset()
    dispatch(startRecovery(data))
    console.log(data)
  }
  return (
    <>
      <div className='flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8 bg-formBg rounded-lg p-16'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-textWhite'>
              Recuperar contraseña
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md '>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Ingrese su correo electronico'
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className='py-2 text-white text-xs font-semibold'>{errors.email?.message}</p>
                )}
              </div>
              <p className='text-zinc-100 text-xs font-semibold tracking-widest text-center pt-5'>
                Se enviara un email para reestablecer su contraseña
              </p>
            </div>
            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest'
              >
                Recuperar contraseña
              </button>
            </div>
          </form>
        </div>
        <div className='mt-10 items-center '>
          <Link to='/login' className='text-textWhite text-sm font-semibold'>
            Volver al Login
          </Link>
        </div>
      </div>
    </>
  )
}
