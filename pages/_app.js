import { NhostAuthProvider, useNhostAuth } from '@nhost/react-auth'

import { nhost } from './nhost'
import '../styles/globals.scss'
import Login from './Login'

function MyApp({ Component, pageProps }) {

  const { isLoading, isAuthenticated } = useNhostAuth()
  const user = nhost.auth.getUser()

  console.debug(`Loading: ${isLoading}`)
  console.debug(`Authenticated: ${isAuthenticated}`)
  console.debug(`Second Auth Check: ${nhost.auth.getAuthenticationStatus().isAuthenticated}`)
  console.debug(`User: ${user}`)

  return (
    <NhostAuthProvider nhost={nhost}>
      {
        // !isAuthenticated ?
        // user === null ?
        !nhost.auth.getAuthenticationStatus().isAuthenticated ?
          <Login /> :
          <Component {...pageProps} />
      }
    </NhostAuthProvider>
  )
}

export default MyApp
