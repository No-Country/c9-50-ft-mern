import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { getChats } from '../../redux/profile/thunks'

export const Matchcolaborator = ({ users }) => {
  const { token, name } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCreateChat = async (colaboratorId) => {
    const {
      data: { payload }
    } = await axios.post(
      '/api/chat',
      { colaboratorId },
      {
        headers: {
          Authorization: `Barer ${token}`
        }
      }
    )

    if (payload.infoInChat) {
      const { _id } = payload.infoInChat
      navigate(`/chat/${_id}`)
      return
    }

    const { _id } = payload
    navigate(`/chat/${_id}`)
  }
  useEffect(() => {
    dispatch(getChats(token, name))
  }, [])
  return (
    <>
      <div className='py-20 bg-gray-50 h-full'>
        <p htmlFor='' className='w-3/4 m-auto mb-16 text-start text-3xl'>
          ¿Quien estas buscando?
        </p>
        {/* Resultados */}
        <div className='w-3/4 m-auto mb-16'>
          <p className='text-xl font-normal'>{users.length} Resultados Encontrados</p>
        </div>
        {/* Primer Card */}
        {users.map(({ _id, name, occupation }) => {
          return (
            <>
              <div
                key={_id}
                className='flex flex-col justify-center items-center w-3/4 h-auto p-5 sm:py-2 sm:px-8 m-auto bg-neutral-300 mb-8 space-y-10 sm:flex-row sm:justify-between md:flex-row md:justify-between'
              >
                <div className='flex flex-col sm:flex-row md:flex-row md:items-center space-y-5 sm:space-y-0 items-center space-x-6'>
                  <div className='flex flex-row justify-center items-center rounded-full w-20 h-20 bg-black overflow-hidden'>
                    <img
                      className='w-full'
                      src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col items-start'>
                    <h2 className='font-semibold text-xl'>{name}</h2>
                    <p>Profesion: {occupation}</p>
                  </div>
                </div>
                <div className='h-16 w-40 my-auto'>
                  <button
                    onClick={() => handleCreateChat(_id)}
                    className='w-full h-4/5 bg-sky-500 text-white hover:bg-sky-600 transition-all -mt-4'
                  >
                    INICIAR CHAT
                  </button>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
