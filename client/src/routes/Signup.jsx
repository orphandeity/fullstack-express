import { Form, Link, redirect } from 'react-router-dom'
import { register } from '../lib/auth'

import styles from '../styles/auth.module.css'

export const action =
  (queryClient) =>
  async ({ request }) => {
    let formData = await request.formData()
    let credentials = Object.fromEntries(formData)

    let user = await register(credentials)

    await queryClient.setQueryData(['session'], user)
    return redirect('/')
  }

function Signup() {
  return (
    <div className={styles.layout}>
      <Form method="post" className={styles.form}>
        <h1>Sign up</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" autoComplete="username" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            autoComplete="new-password"
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </Form>
      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  )
}

export default Signup
