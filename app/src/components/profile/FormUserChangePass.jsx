import { useDispatch, useSelector } from 'react-redux'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { startChangePass } from '../../redux/auth/thunks'

const schema = z
  .object({
    oldPassword: z.string().min(8, { message: 'Must be 8 or more characters long' }),
    password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
    confirmnewPassword: z.string().min()
  })
  .refine((data) => data.password === data.confirmnewPassword, {
    message: "Passwords don't match",
    path: ['confirmnewPassword']
  })
  .refine((data) => data.oldPassword !== data.password, {
    message: 'New password can not be the same as old password',
    path: ['password']
  })

export const FormUserChangePass = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const { token } = useSelector((state) => state.auth)

  const onSubmit = async (data) => {
    dispatch(startChangePass(data, token))
    navigate('/')
  }

  return (
    <div className='md:flex items-center w-full justify-center'>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg max-w-xl'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl m-auto pt-8'>
            Cambio de Contraseña
          </h3>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='-space-y-px rounded-md '>
            <div>
              <label htmlFor='password' className='sr-only'>
                Current Password
              </label>
              <input
                id='oldpassword'
                name='oldPassword'
                type='password'
                autoComplete='current-password'
                className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Ingrese su contraseña actual'
                {...register('oldPassword')}
              />
              {errors.oldPassword?.message && (
                <p className='py-2 text-black text-xs font-semibold'>
                  {errors.oldPassword?.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                New Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Ingrese su nueva contraseña'
                {...register('password')}
              />
              {errors.password?.message && (
                <p className='py-2 text-black text-xs font-semibold'>
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Confirm New Password
              </label>
              <input
                id='confirmnewpassword'
                name='confirmnewPassword'
                type='password'
                autoComplete='current-password'
                className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                placeholder='Repita su nueva contraseña'
                {...register('confirmnewPassword')}
              />
              {errors.confirmnewPassword?.message && (
                <p className='py-2 text-black text-xs font-semibold'>
                  {errors.confirmnewPassword?.message}
                </p>
              )}
            </div>
          </div>
          <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest'
              >
                Confirmar Cambio de Contraseña
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}
