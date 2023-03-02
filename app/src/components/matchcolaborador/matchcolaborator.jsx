import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Avatar from 'react-avatar'
import axios from 'axios'

export const Matchcolaborator = ({ users }) => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
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

    if (payload.data) {
      const { _id } = payload.data.infoInChat
      navigate(`/chat/${_id}`)
      return
    }

    const { _id } = payload
    navigate(`/chat/${_id}`)
  }

  return (
    <>
      <div className='py-20 bg-gray-50 h-auto'>
        <p htmlFor='' className='w-3/4 m-auto mb-16 text-start text-3xl'>
          Colaboradores listos para escucharte!
        </p>
        {/* Resultados */}
        <div className='w-3/4 m-auto mb-16'>
          <p className='text-xl font-normal'>{users.length} Resultados Encontrados</p>
        </div>
        {/* Primer Card */}
        {users.map(({ _id, name, occupation }) => {
          return (
            <div
              key={_id}
              className='flex flex-col justify-center items-center w-3/4 h-auto p-5 sm:py-2 sm:px-8 m-auto bg-neutral-300 mb-8 space-y-10 sm:flex-row sm:justify-between md:flex-row md:justify-between'
            >
              <div className='flex flex-col sm:flex-row md:flex-row md:items-center space-y-5 sm:space-y-0 items-center space-x-6'>
                <div className='flex flex-row justify-center items-center rounded-full w-20 h-20 bg-black overflow-hidden '>
                  <Avatar name={name} size='100' textSizeRatio={1.75} className='animated-ping' />
                </div>

                <div className='flex flex-col gap-2 items-start justify-center'>
                  <div className='flex flex-row gap-2'>
                    <div>
                      <h2 className='font-semibold text-xl'>{name}</h2>
                    </div>
                    <div className='flex items-center'>
                      <span className='bg-green-700 w-4 h-4 absolute rounded-full animate-pulse ' />
                    </div>
                  </div>

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
          )
        })}
      </div>
    </>
  )
}
