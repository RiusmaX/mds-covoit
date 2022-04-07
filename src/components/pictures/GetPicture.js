import React, { useState } from 'react'

import { Button, Modal, Pressable } from 'native-base'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import { uploadPicture } from '../../services/Api'

export const GetPicture = ({ children, setPicture }) => {
  const [showModal, setShowModal] = useState(false)

  // La fonction qui permet d'aller chercher les photos dans la bibliothèque, on y limite aux photos
  const resultLibrary = async () => {
    // LaunchImageLibrary est une fonction de react-native-image-picker qui permet de récupérer une image depuis sa bibliothèque
    launchImageLibrary({ mediaType: 'photo' }, async response => {
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

      try {
        // Appel d'api pour upload l'image sur Strapi
        const result = await uploadPicture(response?.assets[0])
        setPicture(
          `https://mds-covoit.sergent.tech/${result[0].url}`
        )
      } catch (error) {
        console.error(error)
      }
    })
  }

  // La fonction qui permet d'aller capturer une photo avec l'appareil, on y limite aux photos
  const resultCamera = async () => {
    // LaunchCamera est une fonction de react-native-image-picker qui permet de récupérer une image depuis sa caméra
    launchCamera({ mediaType: 'photo' }, async response => {
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

      try {
        // Appel d'api pour upload l'image sur Strapi
        const result = await uploadPicture(response?.assets[0])
        setPicture(
          `https://mds-covoit.sergent.tech/${result[0].url}`
        )
      } catch (error) {
        console.error(error)
      }
    })
  }

  return (
    <>
    {/* On créé le bouton qui ouvre la modal, pour l'utiliser, il faudra donc entourer un bouton du composant GetPicture */}
      <Pressable onPress={() => setShowModal(true)}>
        {children}
      </Pressable>

      <Modal isOpen={showModal} size='xl' onClose={() => setShowModal(false)}>
        <Modal.Content>
          <Modal.Header>Importer une image</Modal.Header>
          <Modal.Body flexDirection='row'>
            <Button onPress={resultLibrary} marginX={2}>
              <Icon name='book' color='white' size={25} />
            </Button>
            <Button onPress={resultCamera} marginX={2}>
              <Icon name='camera' color='white' size={25} />
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowModal(false)}>Annuler</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  )
}
