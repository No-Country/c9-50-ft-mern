import { useSelector } from 'react-redux'

export const UserProfile = () => {
  const { name, email, role, bornDate, occupation } = useSelector((state) => state.auth)
  return (
    <div className='md:flex items-center w-full justify-center'>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg max-w-xl'>
        <div className='px-4 py-5 sm:px-6'>
          <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl m-auto pt-8'>
            Tu Perfil
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>Detalles personales y URLs.</p>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Nombre completo</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{name}</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Ocupación</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{occupation}</dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Correo electronico</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{email}</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Rol</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{role}</dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Fecha de nacimiento</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                {bornDate.slice(0, 10)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
