import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mds-covoit.sergent.tech/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const loginWithCredentials = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const registerWithRegistrationCredentials = async (registrationCredentials) => {
  try {
    const response = await api.post('/auth/local/register', registrationCredentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  loginWithCredentials,
  registerWithRegistrationCredentials
}
