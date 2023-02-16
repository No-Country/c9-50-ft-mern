import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from '../../redux/socket/socketSlice'

export const SocketsWrapper = ({ children }) => {
  const { status, online } = useSelector(({ auth, socket }) => ({ ...auth, ...socket }))
  const dispatch = useDispatch()

  useEffect(() => {
    const { token } = JSON.parse(window.sessionStorage.userInfo)

    if (status === 'authenticated' && !online) {
      dispatch(connect(token))
    }
  }, [status])

  return <>{children}</>
}
