import React, { useState } from 'react'
import Platform from 'react-native'
import { Avatar, Button, Modal, Pressable, Text } from 'native-base'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import { uploadPicture } from '../../services/Api'

export const GetPicture = ({ img }) => {
  const [showModal, setShowModal] = useState(false)
  const [profilePicture, setProfilePicture] = useState(img)

  // La fonction qui permet d'aller chercher les photos dans la bibliothèque, on y limite aux photos
  const resultLibrary = async () => {
    const data = await launchImageLibrary({ mediaType: 'photo' }, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.error('User cancelled camera picker')
        return
      } else if (response.errorCode === 'camera_unavailable') {
        console.error('Camera not available on device')
        return
      } else if (response.errorCode === 'permission') {
        console.error('Permission not satisfied')
        return
      } else if (response.errorCode === 'others') {
        console.error(response.errorMessage)
        return
      }
      console.log('base64 -> ', response?.assets[0].base64)
      console.log('uri -> ', response?.assets[0].uri)
      console.log('width -> ', response?.assets[0].width)
      console.log('height -> ', response?.assets[0].height)
      console.log('fileSize -> ', response?.assets[0].fileSize)
      console.log('type -> ', response?.assets[0].type)
      console.log('fileName -> ', response?.assets[0].fileName)

      const path = Platform.OS === 'android' ? response?.assets[0].uri : response?.assets[0].uri.replace('file://', '')

      setProfilePicture(path)
    })
  }

  // La fonction qui permet d'aller capturer une photo avec l'appareil, on y limite aux photos
  const resultCamera = async () => {
    launchCamera({ mediaType: 'photo' }, async (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.error('User cancelled camera picker')
        return
      } else if (response.errorCode === 'camera_unavailable') {
        console.error('Camera not available on device')
        return
      } else if (response.errorCode === 'permission') {
        console.error('Permission not satisfied')
        return
      } else if (response.errorCode === 'others') {
        console.error(response.errorMessage)
        return
      }
      console.log('base64 -> ', response?.assets[0].base64)
      console.log('uri -> ', response?.assets[0].uri)
      console.log('width -> ', response?.assets[0].width)
      console.log('height -> ', response?.assets[0].height)
      console.log('fileSize -> ', response?.assets[0].fileSize)
      console.log('type -> ', response?.assets[0].type)
      console.log('fileName -> ', response?.assets[0].fileName)

      // On enlève "file://" pour les smartphones IOS qui n'ont pas cela dans leur chemin
      const path = Platform.OS === 'android' ? response?.assets[0].uri : response?.assets[0].uri.replace('file://', '')

      setProfilePicture(path)

      await uploadPicture(path, response?.assets[0].fileName)
    })
  }

  return (
    <>
      <Pressable onPress={() => setShowModal(true)}>
        <Avatar source={{ uri: profilePicture }} size='xl' />

        <Icon name='refresh' style={{ position: 'absolute', color: 'black', bottom: 0, right: 0 }} size={25} />

      </Pressable>

      <Text>{profilePicture}</Text>

      <Modal isOpen={showModal} size='xl' onClose={() => setShowModal(false)}>
        <Modal.Content>

          <Modal.Header>Importer une image</Modal.Header>
          <Modal.Body flexDirection='row'>
            <Button onPress={resultLibrary} marginX={2}><Icon name='book' color='white' size={25} /></Button>
            <Button onPress={resultCamera} marginX={2}><Icon name='camera' color='white' size={25} /></Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowModal(false)}>Annuler</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </>
  )
}
