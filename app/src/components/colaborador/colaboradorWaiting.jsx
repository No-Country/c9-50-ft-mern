import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChats } from '../../redux/profile/thunks'
import Avatar from 'react-avatar'

export const ColaboradorWaiting = () => {
  const { token, name } = useSelector((state) => state.auth)
  const { chats } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChats(token, name))
  }, [])
  return (
    <div className='flex flex-col items-center w-4/5 h-auto pb-28 m-auto mt-10'>
      <div className='flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center w-full sm:h-32 sm:justify-between'>
        <div className='h-full flex flex-row items-center justify-center sm:justify-start w-full sm:w-auto'>
          <div className='h-24 w-24 rounded-3xl flex justify-center items-center overflow-hidden'>
            <Avatar name={name} size='100' textSizeRatio={1.75} />
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
        <h2 className='text-lg pl-5 font-medium'>Mis Pacientes Conectados</h2>
      </div>
      <div className='w-full flex flex-col items-center gap-5'>
        {/* Paciente 1 */}
        {chats.map((chat) => (
          <div
            key={chat._id}
            className='flex flex-col sm:flex-row sm:justify-between items-center px-6 w-full h-auto sm:h-20 mt-4'
          >
            <div className='flex flex-col space-y-5 sm:flex-row items-center sm:space-y-0'>
              <div className='w-16 h-16 overflow-hidden rounded-full flex flex-row justify-center items-center'>
                <Avatar
                  name={chat.users[0].name === name ? chat.users[1].name : chat.users[0].name}
                  size='100'
                  textSizeRatio={1.75}
                />
              </div>
              <div className='flex flex-row items-start justify-start ml-3'>
                <div className='flex'>
                  <p className='text-lg font-medium pb-4'>
                    {chat.users[0].name === name ? chat.users[1].name : chat.users[0].name}
                  </p>
                </div>
                <div className='flex'>
                  <span className='bg-green-700 w-4 h-4 absolute rounded-full animate-pulse ' />
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center h-full'>
              <button
                className='w-32 text-white bg-sky-500 h-10'
                onClick={() => navigate(`/chat/${chat._id}`)}
              >
                IR AL CHAT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
