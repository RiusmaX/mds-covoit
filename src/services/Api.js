import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mds-covoit.sergent.tech/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

/**
 * Appel d'API pour la connexion
 * @param { Object } credentials
 * @returns { Object }
 */
const loginWithCredentials = async (credentials) => {
  try {
    const response = await api.post('/auth/local', credentials)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Récupère tous les trajets
 * @returns { Object }
 */
const getAllTrips = async () => {
  try {
    const response = await api.get('/trips')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

/**
 * Récupère un trajet
 * @param { Number } tripId
 * @returns { Object }
 */
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
