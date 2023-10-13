import axios from 'axios'

export async function getSessionData() {
  try {
    let res = await axios.get('/api/auth/session')
    return res.data
  } catch (err) {
    return null
  }
}

export async function register(credentials) {
  try {
    let response = await axios.post('/api/auth/register', credentials)
    return response.data[0]
  } catch (err) {
    throw new Error(err)
  }
}

export async function login(credentials) {
  try {
    return await axios.post('/api/auth/login', credentials)
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function logout() {
  try {
    return await axios.post('/api/auth/logout')
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
