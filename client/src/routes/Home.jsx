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
  const { data } = useQuery(['message'], getMessage)

  return data ? <h1>😎 {data.message}</h1> : <h1>🤬 something went wrong.</h1>
}

export default Home
