import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <main className='grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Pagina no encontrada
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Lo sentimos, no hemos podido encontrar la página que busca.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/'
              className='rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Regresa a Home
            </Link>
            <Link to='/contacto' className='text-sm font-semibold text-gray-900'>
              Contacto soporte <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
