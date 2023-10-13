import { Form, Link, redirect } from 'react-router-dom'
import { login } from '../lib/auth'

import styles from '../styles/auth.module.css'

export const action =
  (queryClient) =>
  async ({ request }) => {
    let formData = await request.formData()
    let credentials = Object.fromEntries(formData)

    await login(credentials)
    await queryClient.invalidateQueries(['session'])

    return redirect('/')
  }

function Signin() {
  return (
    <div className={styles.layout}>
      <Form method="post" className={styles.form}>
        <h1>Sign in</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" autoComplete="username" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit">Sign in</button>
      </Form>
      <p>
        Don&apos;t have an account yet? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  )
}

export default Signin
