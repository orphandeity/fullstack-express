import { Outlet } from 'react-router-dom'

let style = {
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
    padding: 'var(--padding)',
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
  return (
    <div style={style.wrapper}>
      <header style={style.header}>
        <b>express + react</b>
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
