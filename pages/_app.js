import { NhostAuthProvider, useNhostAuth } from '@nhost/react-auth'

import { nhost } from './nhost'
import '../styles/globals.scss'
import Login from '../lib/components/Login'
import { RequireAuth } from '../lib/components/RequireAuth'

function MyApp({ Component, pageProps }) {

  const { isLoading, isAuthenticated } = useNhostAuth()
  const user = nhost.auth.getUser()

  console.log(`Loading: ${isLoading}`)
  console.log(`Authenticated: ${isAuthenticated}`)
  console.log(`User: ${user}`)

  return (
    <NhostAuthProvider nhost={nhost}>

      {/* BORKED EXAMPLE */}
      {
        isAuthenticated ?
          <Component {...pageProps} /> :
          <Login />
      }

      {/* WORKING EXAMPLE */}
      {/* <RequireAuth>
        <Component {...pageProps} />
      </RequireAuth> */}

    </NhostAuthProvider>
  )
}

export default MyApp

