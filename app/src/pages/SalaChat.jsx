import { Navbar } from '../components/shared/Navbar'
import { Modal } from '../components/chat/chatModal'

export const SalaChat = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <Modal />
    </div>
  )
}
