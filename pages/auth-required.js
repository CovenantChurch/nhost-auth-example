import Link from "next/link"
import { nhost } from './nhost'

export default function AuthRequired() {
  return (
    <article>
      <h2>Private Page</h2>
      <Link href='/'><a className='button'>Back To Home</a></Link>
      <p onClick={async () => await nhost.auth.signOut()} className='button'>Sign Out</p>
    </article>
  )
}
