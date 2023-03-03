import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useDispatch, useSelector } from 'react-redux'
import { startLogin } from '../../redux/auth/thunks'

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be 8 characters or longer' })
})

export const FormLogin = () => {
  const [remember, setRemember] = useState(false)
  const dispatch = useDispatch()
  const { status, role, isLoading } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data) => {
    dispatch(startLogin(data, remember))
  }

  useEffect(() => {
    if (status === 'authenticated') {
      if (role === 'PATIENT') {
        navigate('/eligetucolaborador')
      } else {
        navigate('/tusurls')
      }
    }
  }, [status])

  return (
    <div className='flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8  bg-formBg rounded-lg p-10'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-textWhite'>
            Login
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='-space-y-px rounded-md '>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                placeholder='Ingrese su correo electronico'
                {...register('email')}
              />
              {errors.email?.message && (
                <p className='py-2 text-white text-xs font-semibold'>{errors.email?.message}</p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                placeholder='Ingrese su contraseña'
                {...register('password')}
              />
              {errors.password?.message && (
                <p className='py-2 text-white text-xs font-semibold'>{errors.password?.message}</p>
              )}
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-slate-50 focus:ring-slate-50'
                onChange={({ target }) => setRemember(target.checked)}
              />
              <label htmlFor='remember-me' className='ml-2 block text-sm text-textWhite'>
                Recordarme
              </label>
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type='submit'
              className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-textWhite hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-slate-50 focus:ring-offset-2 uppercase tracking-widest'
            >
              Login
            </button>
          </div>
        </form>
        <div className='flex flex-col gap-5 items-center'>
          <Link to='/recovery' className='font-medium text-primary hover:text-primaryHover text-sm'>
            Olvidaste tu password?
          </Link>
        </div>
      </div>
      <div className='mt-10 items-center flex-col flex gap-10'>
        <Link to={'/register'} className='text-textWhite text-sm font-semibold'>
          Registra tu usuario aqui!
        </Link>
        <Link to='/' className='text-textWhite text-sm font-semibold '>
          Home
        </Link>
      </div>
    </div>
  )
}
