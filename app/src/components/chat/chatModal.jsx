import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import * as z from 'zod'
import { addMessage } from '../../redux/profile/profileSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { VideoCameraIcon, CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import PuffLoader from 'react-spinners/PuffLoader'
import { getChatById } from '../../redux/profile/thunks'
import Avatar from 'react-avatar'
import CreateCalendar from './createCalendar'

const schema = z.object({
  content: z.string().min(1, { message: 'Message is required' })
})
export const Modal = () => {
  const { _id } = useParams()
  const LastMessage = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { token, id: sender, role } = useSelector((state) => state.auth)
  const { activeChat, messages, loading } = useSelector((state) => state.profile)
  const { socket } = useSelector((state) => state.socket)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  })
  const [mensajes, setMensajes] = useState([])
  useEffect(() => {
    let newMenssages = []
    newMenssages = new Set(messages)
    const result = [...newMenssages]
    setMensajes(result)
  }, [messages])
  const onSubmit = ({ content }) => {
    console.log('messsages sended')
    socket.emit('message', { content, sender, chat: _id })
    reset()
  }

  useEffect(() => {
    dispatch(getChatById(_id, token))
  }, [_id])

  useEffect(() => {
    if (socket) {
      socket.emit('join-room', _id)
      socket.on('new-messages', (message) => dispatch(addMessage(message)))
    }
    return () => socket.emit('leave-room', _id)
  }, [])
  useEffect(() => {
    LastMessage.current?.scrollIntoView()
  }, [mensajes])

  const [calendar, setCalendar] = useState(null)
  function addMeet() {
    console.log(activeChat.infoInChat)
    if (activeChat?.infoInChat?.users[0]?._id !== sender) {
      setCalendar(
        <CreateCalendar
          setCalendar={setCalendar}
          colaboradorId={activeChat?.infoInChat?.users[0]?._id}
          miRole={role}
        />
      )
    } else {
      setCalendar(
        <CreateCalendar
          setCalendar={setCalendar}
          colaboradorId={activeChat?.infoInChat?.users[1]?._id}
          miRole={role}
        />
      )
    }
  }
  return (
    <>
      <div className='flex flex-row right-0 w-full p bg-slate-500 h-auto'>
        <div
          className='cursor-pointer h-full flex flex-row items-center ml-5 text-white text-xl'
          onClick={() => navigate('/chat')}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className='flex flex-row w-full h-24 pl-10 items-center space-x-3'>
          <div className='flex items-center w-20 h-20 rounded-full overflow-hidden'>
            <Avatar
              name={
                activeChat?.infoInChat.users[0]._id === sender // abstraer a una varible
                  ? activeChat?.infoInChat.users[1].name
                  : activeChat?.infoInChat.users[0].name
              }
              size='80'
              textSizeRatio={1.75}
              maxInitials={2}
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
        <div className='mr-10 mt-7 flex gap-7'>
          <a
            target='blank'
            href={
              activeChat?.infoInChat?.users[0]?._id === sender
                ? activeChat?.infoInChat?.users[1]?.role?.mettUrl
                : activeChat?.infoInChat?.users[0]?.role?.mettUrl
            }
          >
            <VideoCameraIcon
              className='ml-2  mt-3 -mr-1 h-8 w-8 text-white hover:text-primary'
              aria-hidden='true'
            />
          </a>
          <a
            target='blank'
            href={
              activeChat?.infoInChat?.users[0]?._id === sender
                ? activeChat?.infoInChat?.users[1]?.role?.refered
                : activeChat?.infoInChat?.users[0]?.role?.refered
            }
          >
            <CurrencyDollarIcon
              className='ml-2 mt-3 -mr-1 h-8 w-8 text-white hover:text-primary'
              aria-hidden='true'
            />
          </a>
          <a onClick={addMeet}>
            <CalendarDaysIcon
              className='ml-2 mt-3 -mr-1 h-8 w-8 text-white hover:text-primary'
              aria-hidden='true'
            />
          </a>
          {calendar}
        </div>
      </div>
      <div className='grow w-full h-screen px-5 overflow-hidden py-5'>
        <div className='h-full w-full overflow-y-auto overflow-x-hidden flex flex-col gap-4'>
          {loading
            ? (
            <div className='flex justify-center items-center'>
              <PuffLoader color='#020101' />
            </div>
              )
            : (
                mensajes.map(({ _id, content, sender: { _id: senderId } }) => (
              <>
                <div
                  className={`w-[80%] max-w-2xl break-words px-5 py-3 rounded-lg ${
                    senderId === sender ? 'bg-primary text-white ml-auto' : 'bg-neutral-200'
                  }`}
                  key={_id}
                >
                  {content}
                  <div ref={LastMessage}></div>
                </div>
              </>
                ))
              )}
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
