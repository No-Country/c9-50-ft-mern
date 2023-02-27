import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import * as z from 'zod'
import { getChatById } from '../../redux/profile/thunks'
import { addMessage } from '../../redux/profile/profileSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

const schema = z.object({
  content: z.string().min(1, { message: 'Message is required' })
})
export const Modal = () => {
  const { _id } = useParams()
  const LastMessage = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token, id: sender } = useSelector((state) => state.auth)
  const { activeChat, messages } = useSelector((state) => state.profile)
  const { socket } = useSelector((state) => state.socket)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = ({ content }) => {
    socket.emit('message', { content, sender, chat: _id })
  }

  useEffect(() => {
    dispatch(getChatById(_id, token))
  }, [_id])

  useEffect(() => {
    if (socket) {
      socket.emit('join-room', _id)
      socket.on('new-messages', (message) => dispatch(addMessage(message)))
    }
  }, [])
  useEffect(() => {
    LastMessage.current?.scrollIntoView()
  }, [messages])
  return (
    <>
      <div className='flex flex-row right-0 w-full p bg-slate-500'>
        <div
          className='cursor-pointer h-full flex flex-row items-center ml-5 text-white text-xl'
          onClick={() => navigate('/chat')}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className='flex flex-row w-full h-24 pl-10 items-center space-x-3'>
          <div className='flex items-center w-20 h-20 rounded-full overflow-hidden'>
            <img
              src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
              alt=''
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h2 className='text-white text-lg font-light'>
              {activeChat?.infoInChat.users[0]._id === sender // abstraer a una varible
                ? activeChat?.infoInChat.users[1].name
                : activeChat?.infoInChat.users[0].name}
            </h2>
            <p className='text-white font-medium text-sm'>
              {activeChat?.infoInChat.users[0]._id === sender
                ? activeChat?.infoInChat.users[1].occupation
                : activeChat?.infoInChat.users[0].occupation}
            </p>
          </div>
        </div>
        <div className='mr-10 mt-4'>
          <p className='text-white text-4xl cursor-pointer'>...</p>
        </div>
      </div>
      <div className='grow w-full px-5 overflow-hidden py-5'>
        <div className='h-full w-full overflow-y-auto overflow-x-hidden flex flex-col gap-4'>
          {messages.map(({ _id, content, sender: { _id: senderId } }) => (
            <div
              className={`w-[80%] max-w-2xl break-words px-5 py-3 rounded-lg ${
                senderId === sender ? 'bg-primary text-white ml-auto' : 'bg-neutral-200'
              }`}
              key={_id}
            >
              {content}
            </div>
          ))}
          <div ref={LastMessage}></div>
        </div>
      </div>
      <form
        className='w-full flex flex-row justify-center bottom-10 gap-4 my-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          name='chatMessage'
          type='text'
          placeholder='Escribe un mensaje'
          className='w-3/4 p-4 rounded-lg border-none outline-none bg-neutral-200
                '
          {...register('content', { required: true, minLength: 1 })}
        />

        <button
          type='submit'
          className='bg-primary py-5 px-6 hover:bg-primaryHover rounded-full font-bold text-white'
          disabled={!!errors.chatMessage?.message}
        >
          <AiOutlineArrowRight />
        </button>
      </form>
    </>
  )
}
