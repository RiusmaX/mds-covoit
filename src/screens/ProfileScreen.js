import { Box, Button, Center, Modal } from 'native-base'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons'

import HeaderProfil from '../components/profile/HeaderProfil'
import UserProfil from '../components/profile/UserProfil'
import UserTrips from '../components/profile/UserTrips'
import { TabsComponent } from '../components/tabs/Tabs'

// Navigation dans le profil

// fonction pour l'affichage du bon screen avec une route
function ProfileScreen () {
  return (
    <>
      <HeaderProfil />
      <TabsComponent
        views={[
          {
            key: 'first',
            title: 'Profil',
            component: UserProfil
          },
          {
            key: 'second',
            title: 'Mes trajets',
            component: UserTrips
          }
        ]}
        style={{ marginTop: 30 }}
      />
    </>
  )
}

export default ProfileScreen
