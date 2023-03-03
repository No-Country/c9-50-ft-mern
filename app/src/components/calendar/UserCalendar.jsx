import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTurnos, deleteCalendar } from '../../redux/profile/thunks'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PuffLoader from 'react-spinners/PuffLoader'
import { toast } from 'react-toastify'

export const UserCalendar = () => {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [state, setState] = useState(undefined)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    dispatch(getTurnos(token))
      .then((e) => {
        setloading(false)
        setState(e.payload?.data)
        console.log(e.payload.data)
      })
      .catch((e) => {
        setState([{ otro: 'sin turnos..' }])
      })
  }, [])

  function deleteTurno(id) {
    dispatch(deleteCalendar(id, token))
      .then((e) => {
        const newCalendar = []
        state.forEach((e) => {
          if (e.id !== id) {
            newCalendar.push(e)
          }
        })
        setState(newCalendar)
        console.log(state)
        toast.success('Turno borrado correctamente')
      })
      .catch((e) => {
        console.log(e)
        toast.error('error')
      })
  }

  return (
    <>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        {state === undefined && loading === false && (
          <div className='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
            No hay turnos
          </div>
        )}
        <div className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8'>
            {state !== undefined &&
              state.map((e) => {
                return (
                  <div key={e.id} className='flex flex-col border rounded-lg p-4 md:p-6 relative'>
                    <XMarkIcon
                      onClick={() => deleteTurno(e.id)}
                      className='absolute top-0 right-2 ml-2  mt-3 -mr-1 h-8 w-8 text-red-600 hover:text-red-900'
                    />
                    <h3 className='text-lg md:text-xl font-semibold mb-2 max-w-sm'>{e.otro}</h3>
                    <h2 className='text-sm md:text-base mb-2 max-w-sm'>{e.otroOcuppation}</h2>
                    <p className='text-gray-500 mb-4 max-w-sm'>{e.activity}</p>
                    <p className='text-gray-700 mt-auto max-w-sm'>
                      Fecha: <span className='text-primary max-w-sm mt-auto'>{e.date}</span>
                    </p>
                    <p className='text-gray-700 max-w-sm'>
                      Hora: <span className='text-primary max-w-sm f'>{e.startHour}</span>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      {loading && (
        <div className='flex justify-center items-center'>
          <PuffLoader color='#020101' />
        </div>
      )}
    </>
  )
}
