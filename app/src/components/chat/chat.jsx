import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const ChatView = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='w-full h-screen relative overflow-hidden flex flex-col'>
        <div className='fixed bg-white p-5 rounded-full shadow-md bottom-8 left-5 text-4xl z-50 cursor-pointer' onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft />
        </div>
        <div className='w-full relative sm:w-3/4 h-full sm:absolute right-0 top-0'>
          <div className='flex flex-col w-full h-full items-end'>
            <div className='flex flex-row right-0 w-full p bg-slate-500'>
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
        <div className='hidden order-first sm:order-2 relative w-full sm:flex sm:flex-row justify-start items-center sm:gap-5 md:gap-10 sm:absolute sm:top-0 sm:w-1/4 border-b-2 sm:border-r-2 h-24 bg-slate-500 pl-6'>
          <div className='h-16 w-16 rounded-full overflow-hidden'>
            <img
              src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
              alt=''
            />
          </div>
          <p className='text-white font-ligth md:text-lg sm:text-md text-md'>Mi Perfil</p>
        </div>
        <div className='hidden sm:flex flex-col w-1/4 absolute top-24 left-0 h-full bg-neutral-100'>
          {/* Contact 1 */}
          <div className='flex flex-row items-center space-x-3 pl-4 w-full h-24 border-b-2 cursor-pointer'>
            <div className='h-16 w-16 overflow-hidden rounded-full'>
              <img
                src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
                alt=''
              />
            </div>
            <div className='flex-col'>
              <h2 className=' text-sm sm:text-md md:text-md font-semibold'>Marcela Rodriguez</h2>
              <p className='hidden  sm:inline text-sm'>Last Message</p>
            </div>
          </div>
          {/* Contact 2 */}
          <div className='flex flex-row items-center space-x-3 pl-4 w-full h-24 border-b-2 cursor-pointer'>
            <div className='h-16 w-16 overflow-hidden rounded-full'>
              <img
                src='https://previews.123rf.com/images/seventyfour74/seventyfour741708/seventyfour74170800167/83829695-retrato-de-hermosa-mujer-psic%C3%B3loga-con-gafas-posando-con-portapapeles-en-la-oficina-de-terapia-c%C3%B3mod.jpg'
                alt=''
              />
            </div>
            <div className='flex-col'>
              <h2 className=' text-sm sm:text-md md:text-md font-semibold'>Marcela Rodriguez II</h2>
              <p className='hidden  sm:inline text-sm'>Last Message</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
