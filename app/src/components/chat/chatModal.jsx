import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const Modal = () => {
  const navigate = useNavigate()

  // const handleMessage = (messageInfo) => {
  //   socket.emit('message', messageInfo)
  // }

  return (
    <>
      <div className='w-full relative h-screen'>
        <div className='flex flex-col w-full h-full items-end'>
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
                <h2 className='text-white text-lg font-light'>Marcela Rodriguez</h2>
                <p className='text-white font-medium text-sm'>Psicologa</p>
              </div>
            </div>
            <div className='mr-10 mt-4'>
              <p className='text-white text-4xl cursor-pointer'>...</p>
            </div>
          </div>
          <div className='bg-white h-full w-full'>
            <div className='flex flex-col w-full px-10 h-4/5 py-5'>
              <span>
                <span className='w-auto bg-neutral-200 px-5 py-3 rounded-lg '>mensaje</span>
              </span>
            </div>
            <form
              action=''
              className='absolute w-full flex flex-row justify-center bottom-10 gap-4'
            >
              <input
                type='text'
                placeholder='Escribe un mensaje'
                className='w-3/4 p-4 rounded-lg border-none outline-none bg-neutral-200'
              />
              <button
                type='submit'
                className='bg-sky-500 py-5 px-6 rounded-full font-bold text-white'
              >
                <AiOutlineArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
