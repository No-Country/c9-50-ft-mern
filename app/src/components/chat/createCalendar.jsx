import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCalendar } from '../../redux/profile/thunks'
import { toast } from 'react-toastify'

export default function CreateCalendar(props) {
  const { id, token } = useSelector((state) => state.auth)
  const [datos, setDatos] = useState({
    date: null,
    activity: null,
    colaboratorId: props.colaboradorId,
    pacientId: id,
    startHour: null
  })
  const [inputErrorActivity, setInputErrorActivity] = useState(null)
  const [inputErrorDate, setInputErrorDate] = useState(null)
  const [inputErrorHour, setInputErrorHour] = useState(null)
  const dispatch = useDispatch()
  function onChangehandle({ name, value }) {
    setDatos({
      ...datos,
      [name]: value
    })
  }

  function send() {
    if (datos.activity == null || datos.activity.length > 130) {
      setInputErrorActivity('w-full bg-gray-50 text-gray-800 border border-red-500 px-3 py-2')
      return
    }
    if (datos.date == null) {
      setInputErrorDate('w-full bg-gray-50 text-gray-800 border border-red-500 px-3 py-2')
      return
    }
    if (datos.startHour == null) {
      setInputErrorHour('w-full bg-gray-50 text-gray-800 border border-red-500 px-3 py-2')
      return
    }
    dispatch(addCalendar(token, datos))
      .then((e) => {
        props.setCalendar(null)
        toast.success('Turno Creado correctamente')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const inputStyles =
    'w-full bg-gray-50 text-gray-800 border border-gray-500 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
  return (
    <div className='p-10 bg-gray-700  bg-opacity-30 border-r opacity-95 absolute top-0 right-0 left-0 bottom-0 m-auto lg:p-48'>
      <div className='m-auto p-11 bg-white opacity-100 bg-opacity-100 rounded-xl z-50 h-auto'>
        <p className='text-center text-lg text-black mb-7'>Agendar una reuníon</p>
        <div className='mb-5'>
          <label>Nota: </label>
          <input
            onChange={(e) => onChangehandle(e.target)}
            type='text'
            name='activity'
            placeholder='Nota del turno'
            className={inputErrorActivity || inputStyles}
          />
          <p className='text-xs text-gray-600'>Max. 130 caracteres.</p>
        </div>
        <div className='mb-5'>
          <label>Fecha: </label>
          <input
            id='date'
            name='date'
            type='date'
            min={new Date().toISOString().split('T')[0]}
            className={inputErrorDate || inputStyles}
            placeholder='Ingrese la fecha de la reuníon..'
            onChange={(e) => onChangehandle(e.target)}
          />
        </div>
        <div className='mb-5'>
          <label>Hora: </label>
          <input
            onChange={(e) => onChangehandle(e.target)}
            name='startHour'
            className={inputErrorHour || inputStyles}
            type='time'
          />
        </div>
        <div className='flex justify-around'>
          <button
            onClick={() => props.setCalendar(null)}
            className='p-2 px-3 border rounded-sm border-gray-400 shadow-md '
          >
            Cancelar
          </button>
          <button
            onClick={() => send()}
            className='p-2 px-3 rounded-sm bg-primary text-white shadow-md hover:bg-primaryHover'
          >
            Agendar
          </button>
        </div>
      </div>
    </div>
  )
}
