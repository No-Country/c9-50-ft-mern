import { useNavigate } from 'react-router-dom'
const personas = [
  { id: 1, nombre: 'Marcela Rodriguez', last: 'Saludos' },
  { id: 2, nombre: 'Alejandra Jimenez', last: 'Genial' }
]
export const ColaboradorWaiting = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center w-4/5 h-auto pb-28 m-auto mt-10'>
      <div className='flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center w-full sm:h-32 sm:justify-between'>
        <div className='h-full flex flex-row items-center justify-center sm:justify-start w-full sm:w-auto'>
          <div className='h-24 w-24 rounded-3xl flex justify-center items-center overflow-hidden'>
            <img
              className='h-full w-full'
              src='https://www.angelacoronapsicologa.com/wp-content/uploads/2021/10/e6.jpg'
              alt=''
            />
          </div>
          <div className='ml-5 flex flex-col items-start'>
            <h3 className='text-3xl font-semibold'>Mi Perfil</h3>
            <p className='text-md '>Mi Profesion</p>
          </div>
        </div>
        <div className='flex flex-row space-x-2 sm:space-x-0 w-4/5 sm:w-80 justify-center sm:justify-end sm:pr-10 h-full items-center'>
          <button
            className='sm:w-2/5 py-2 sm:px-0 px-3 w-auto bg-sky-500 text-white'
            onClick={() => navigate('/tusurls')}
          >
            Configuracion
          </button>
        </div>
      </div>
      <div className='w-full flex flex-row justify-start items-center mt-32 mb-14'>
        <h2 className='text-lg pl-5 font-medium'>Mis Pacientes</h2>
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        {/* Paciente 1 */}
        {personas.map((paciente) => (
          <div
            key={paciente.id}
            className='flex flex-col sm:flex-row sm:justify-between items-center px-6 w-full h-auto sm:h-20 mt-4'
          >
            <div className='flex flex-col space-y-5 sm:flex-row items-center sm:space-y-0'>
              <div className='w-16 h-16 overflow-hidden rounded-full flex flex-row justify-center items-center'>
                <img
                  className='h-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q4JmxazuBpck48ReHTEyA1aVZNq5JOCWug&usqp=CAU'
                  alt=''
                />
              </div>
              <div className='flex flex-row items-start justify-start ml-3'>
                <p className='text-lg font-medium pb-4'>{paciente.nombre}</p>
              </div>
            </div>
            <div className='flex flex-row items-center h-full'>
              <button className='w-32 text-white bg-sky-500 h-10' onClick={() => navigate('/chatting')}>
                IR AL CHAT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
