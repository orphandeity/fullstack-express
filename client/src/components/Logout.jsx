import { useQuery } from '@tanstack/react-query'
import { getSessionData } from '../lib/auth'
import { Form } from 'react-router-dom'

const sessionQuery = () => ({
  queryKey: ['session'],
  queryFn: getSessionData,
})

function Logout() {
  const { data: session } = useQuery(sessionQuery(sessionQuery()))

  return session ? (
    <Form method="post">
      <button type="submit">Logout</button>
    </Form>
  ) : null
}

export default Logout
