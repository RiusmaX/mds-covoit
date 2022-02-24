import AsyncStorage from '@react-native-async-storage/async-storage'
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
    const response = await api.get('/trips')
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

// Récupération des informations de l'utilisateur actuellement connecté
const getUserInfos = async () => {
  // On récupère le token de l'utilisateur connecté pour le passer dans le header
  const getUserToken = await AsyncStorage.getItem('AUTH')
  const userToken = getUserToken ? JSON.parse(getUserToken).token : null
  try {
    const response = await api.get('/users/me', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  loginWithCredentials,
  getAllTrips,
  getOneTrip,
  getUserInfos
}
