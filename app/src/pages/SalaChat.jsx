import { Navbar } from '../components/shared/Navbar'
import { Footer } from '../components/shared/Footer'
import { Modal } from '../components/chat/chatModal'

export const SalaChat = () => {
  // const useEffect(() => {
  //   socket.emit('join-room', idChat)
  // }, [])

  // const useEffect(() => {
  //   socket.on('messages', (messages) => {
  //     setMessage(message)
  //   })
  // }, [])

  return (
    <>
      <Navbar />
      <Modal />
      <Footer />
    </>
  )
}
