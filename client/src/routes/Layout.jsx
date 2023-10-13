import { Link, Outlet, redirect } from 'react-router-dom'
import { getSessionData, logout } from '../lib/auth'
import { useQuery } from '@tanstack/react-query'
import Auth from '../components/Auth'
import Logout from '../components/Logout'

const sessionQuery = () => ({
  queryKey: ['session'],
  queryFn: getSessionData,
})

export const action = (queryClient) => async () => {
  await logout()
  await queryClient.invalidateQueries(['session'])
  return redirect('/')
}

let style = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    padding: 'var(--padding)',
    backgroundColor: 'var(--background-color)',
  },
  header: {
    flex: '0 0 auto',
    paddingBottom: 'var(--padding)',
  },
  main: {
    flex: '1 1 auto',
  },
  footer: {
    textAlign: 'center',
    paddingTop: 'var(--padding)',
  },
}

function Layout() {
  const { data: session } = useQuery(sessionQuery())
  return (
    <div style={style.wrapper}>
      <Auth />

      <header style={style.header}>
        <Link to="/">
          <b>express + react</b>
        </Link>
        {session && <p>Hello {session.username}!</p>}
        <Logout />
      </header>
      <div style={style.main}>
        <Outlet />
      </div>
      <footer style={style.footer}>
        <small>🍄 created by orphandeity</small>
      </footer>
    </div>
  )
}

export default Layout
