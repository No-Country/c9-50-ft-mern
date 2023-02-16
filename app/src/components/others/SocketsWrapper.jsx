import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from '../../redux/socket/socketSlice'

export const SocketsWrapper = ({ children }) => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch(connect())
    }
  }, [status])

  return <>{children}</>
}
