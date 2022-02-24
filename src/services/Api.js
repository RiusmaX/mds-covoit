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
 * registerWithRegistrationCredentials
 * @param { props } registrationCredentials Credentials for registration email or username + password requireds
 * @returns { Function } Registration with credentials
 */
const registerWithRegistrationCredentials = async (registrationCredentials) => {
  try {
    const response = await api.post('/auth/local/register', registrationCredentials)
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
    const response = await api.get('/trips?populate=*')
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
  registerWithRegistrationCredentials,
  getAllTrips,
  getOneTrip,
  getUserInfos
}
