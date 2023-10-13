import { useQuery } from '@tanstack/react-query'

const getMessage = async () => {
  try {
    const response = await fetch('/api')
    return await response.json()
  } catch (err) {
    throw new Error(err)
  }
}

function Home() {
  const { data, isLoading, isError } = useQuery(['message'], getMessage)

  const message = isLoading ? (
    <strong>🙄 loading...</strong>
  ) : isError ? (
    <strong>🤬 something went wrong.</strong>
  ) : (
    <strong>😎 {data.message}</strong>
  )

  return (
    <div style={{ display: 'grid', gap: 'var(--padding)' }}>
      <h1>Welcome!</h1>
      <p style={{ maxWidth: '550px' }}>
        This template combines Express and React to help you create dynamic web
        applications effortlessly. If everything is set up correctly, you should
        see a friendly message from the server below.
      </p>
      <p>Enjoy your development journey! ✌️</p>
      <p>{message}</p>
    </div>
  )
}

export default Home
