import { useRef } from 'react'
import { Link } from 'react-router-dom'

export const FormRegister = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const userNameRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  //   const colaboratorRef = useRef(null)
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
      //   isColaborator: colaboratorRef.current.value
    }
    console.log(data)
  }
  return (
    <>
      <div className='flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8 bg-[#d9d9d960] rounded-lg p-10'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-textWhite'>
              Registrarse
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={onSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='username' className='sr-only'>
                  Nombre de usuario
                </label>
                <input
                  id='username'
                  name='username'
                  type='text'
                  autoComplete='username'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                  placeholder='Ingrese su nombre de Usuario'
                  ref={userNameRef}
                />
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-slate-50 focus:outline-none focus:ring-slate-50 sm:text-sm'
                  placeholder='Ingrese su correo electronico'
                  ref={emailRef}
                />
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
                  required
                  className='relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Ingrese su contraseña'
                  ref={passwordRef}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Confirm Password
                </label>
                <input
                  id='confirmPassword'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Repita su contraseña'
                  ref={confirmPasswordRef}
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-widest'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className='mt-10 items-center'>
          <Link to='/login' className='text-textWhite text-sm font-semibold'>
            Ya tengo una cuenta
          </Link>
        </div>
      </div>
    </>
  )
}
