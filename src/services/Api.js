import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import FormData from 'form-data'
import Platform from 'react-native'

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
const loginWithCredentials = async credentials => {
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
const registerWithRegistrationCredentials = async registrationCredentials => {
  try {
    const response = await api.post(
      '/auth/local/register',
      registrationCredentials
    )
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
const getOneTrip = async tripId => {
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

/**
 * Add Trip
 * @param { Object } datas
 * @returns { Object }
 */
const postTrip = async (datas) => {
  try {
    const response = await api.post('/trips', datas)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
// Envoi d'une image
const uploadPicture = async img => {
  // On récupère le Token de l'utilisateur
  const getUserToken = await AsyncStorage.getItem('AUTH')
  const userToken = getUserToken ? JSON.parse(getUserToken).token : null

  // Pour envoyer l'image, il faut que l'envoi soit de type formulaire, on créé donc un FormData
  const formData = new FormData()
  const uri = img.uri

  formData.append('files', {
    name: img.fileName,
    type: img.type,
    // Les images sur Android et ios ne sont pas stocké à la même adresse, Android rajoute 'file://'
    uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri
  })

  try {
    const response = await window
      .fetch('https://mds-covoit.sergent.tech/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`
        },
        body: formData
      })
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export {
  loginWithCredentials,
  registerWithRegistrationCredentials,
  getAllTrips,
  getOneTrip,
  postTrip,
  getUserInfos,
  uploadPicture
}
