import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = ({ isAllowed, redirectTo = '/login', children }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />
  return children || <Outlet />
}
