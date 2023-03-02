import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { ChatView } from '../components/chat/chat'

export const Chat = () => {
  return (
    <div className='flex flex-col justify-between h-auto'>
      <Navbar />
      <ChatView />
      <Footer />
    </div>
  )
}
