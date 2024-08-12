import { useAuthContext } from './useAuthContext'
import { useBlogsContext } from './useBlogsContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    localStorage.removeItem('user')
    console.log('User logged out and removed from localStorage'); 

    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}
