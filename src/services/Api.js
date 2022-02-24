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

const getAllTrips = async () => {
  try {
    const response = await api.get('/trips?populate=*')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getOneTrip = async (tripId) => {
  try {
    const response = await api.get(`/trips/${tripId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  loginWithCredentials,
  getAllTrips,
  getOneTrip
}
