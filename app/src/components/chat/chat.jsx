import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getChats } from '../../redux/profile/thunks'
import Avatar from 'react-avatar'
export const ChatView = () => {
  const navigate = useNavigate()
  const { token, name } = useSelector((state) => state.auth)
  const { chats } = useSelector((state) => state.profile)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChats(token, name))
  }, [])
  return (
    <>
      <div className='w-full h-screen relative overflow-y-auto flex flex-col'>
        <div className='w-full flex flex-row justify-start items-center gap-10 absolute top-0  border-b-2 border-r-2 h-24 bg-slate-500 pl-6'>
          <div className='h-16 w-16 rounded-full overflow-hidden'>
            <Avatar name={name} size='65' textSizeRatio={1.75} maxInitials={2} />
          </div>
          <p className='text-white font-ligth text-xl '>Mi Perfil</p>
        </div>
        <div className='flex flex-col w-full absolute top-24 left-0 h-full bg-neutral-100'>
          {/* Contact 1 */}
          {chats?.map((chat) => (
            <div
              key={chat._id}
              className='flex flex-row items-center space-x-3 pl-4 w-full h-24 border-b-2 cursor-pointer'
              onClick={() => navigate(`/chat/${chat._id}`)}
            >
              <div className='h-16 w-16 overflow-hidden rounded-full'>
                <Avatar
                  name={chat?.users[0]?.name === name ? chat?.users[1]?.name : chat?.users[0]?.name}
                  size='65'
                  textSizeRatio={1.75}
                  maxInitials={2}
                />
              </div>
              <div className='flex-col'>
                <h2 className=' text-sm sm:text-md md:text-md font-semibold'>
                  {chat?.users[0]?.name === name ? chat?.users[1]?.name : chat?.users[0]?.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
