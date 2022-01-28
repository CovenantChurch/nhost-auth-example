import Link from 'next/link'
import { nhost } from './nhost'

export default function Home() {
  return (
    <article>
      <h2>YAY!! Logged in!</h2>
      <Link href='/auth-required'><a className='button'>To Private Page</a></Link>
      <p onClick={async () => await nhost.auth.signOut()} className='button'>Sign Out</p>
    </article>
  )
}
