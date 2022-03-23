import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import FormData from 'form-data'
import RNFetchBlob from 'rn-fetch-blob'

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

const uploadPicture = async img => {
  const getUserToken = await AsyncStorage.getItem('AUTH')
  const userToken = getUserToken ? JSON.parse(getUserToken).token : null

  const formData = new FormData()
  const uri = img.uri

  formData.append('files', {
    name: img.fileName,
    type: img.type,
    uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri
  })

  window
    .fetch('https://mds-covoit.sergent.tech/api/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`
      },
      body: formData
    })
    .then(response => response.json())
    .then(result => console.log('result', JSON.stringify(result)))
    .catch(error => {
      console.error(error)
      throw new Error(error)
    })

  // const fileData = {
  //   filename,
  //   type: 'image/jpeg',
  //   data: RNFetchBlob.wrap(path)
  // }

  // RNFetchBlob.fetch('POST', 'https://mds-covoit.sergent.tech/api/upload', {
  //   'Content-Type': 'multipart/form-data',
  //   Authorization: `Bearer ${userToken}`

  // }, [fileData]).then((res) => {
  //   console.log(JSON.stringify(res))
  // }).catch((error) => {
  //   console.error(JSON.stringify(error))
  // })

  // const config = {
  //   method: 'post',
  //   url: 'https://mds-covoit.sergent.tech/api/upload',
  //   headers: {
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQ2OTA0ODk2LCJleHAiOjE2NDk0OTY4OTZ9.Eky5_Xe1uGMEiZO0UOKo0WftV7kRx1l49VeXPLIrYJI',
  //     'Content-Type': 'multipart/form-data'

  //   },
  //   data: data
  // }
}

export {
  loginWithCredentials,
  registerWithRegistrationCredentials,
  getAllTrips,
  getOneTrip,
  getUserInfos,
  uploadPicture
}
