import { useNhostAuth } from "@nhost/react-auth"
import Login from "./Login"

export function RequireAuth({ children }) {
  const { isLoading, isAuthenticated } = useNhostAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Login />
  }

  return children
}