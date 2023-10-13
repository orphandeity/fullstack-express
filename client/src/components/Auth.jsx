import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getSessionData } from '../lib/auth'

import styles from '../styles/auth.module.css'

const sessionQuery = () => ({
  queryKey: ['session'],
  queryFn: getSessionData,
})

export default function Auth() {
  const { data: session } = useQuery(sessionQuery())
  if (session) return null
  else
    return (
      <div className={styles.banner}>
        <p>
          For the best experience please{' '}
          <Link to="/signin">
            <b>sign in</b>
          </Link>{' '}
          or{' '}
          <Link to="/signup">
            <b>sign up</b>
          </Link>
          !
        </p>
      </div>
    )
}
