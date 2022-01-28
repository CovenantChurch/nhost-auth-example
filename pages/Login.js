import { useState } from "react"
import { nhost } from "./nhost"

import styles from '../styles/Login.module.scss'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error, session } = await nhost.auth.signIn({
      email: `${email}`,
      password: `${password}`,
    })

    console.debug(`Session: ${session}`)
    if (error) console.debug(error.message)
  }

  return (
    <article className={styles.modalWindow}>
      <form className={styles.loginContainer} onSubmit={e => handleSubmit(e)} >
        <h1>Login</h1>
        <label>
          <p>Email</p>
          <input
            type='text'
            value={email}
            placeholder="user@email.com"
            onChange={e => setEmail(e.target.value)}
            maxLength={35}
            autoComplete="off"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            value={password}
            placeholder="user@email.com"
            onChange={e => setPassword(e.target.value)}
            maxLength={35}
            autoComplete="off"
          />
        </label>
        <input type='submit' value='Login' />
      </form>
    </article>
  )
}
