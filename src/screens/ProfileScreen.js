import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import HeaderProfil from '../components/profile/HeaderProfil'
import UserProfil from '../components/profile/UserProfil'
import UserTrips from '../components/profile/UserTrips'

// Navigation dans le profil
const FirstRoute = () => (
  <UserProfil />
)

const SecondRoute = () => (
  <UserTrips />
)

// switch entre les routes de tabview
const renderScene = SceneMap({
  profil: FirstRoute,
  trips: SecondRoute
})

// fonction pour l'affichage du bon screen avec une route
function ProfileScreen () {
  const layout = useWindowDimensions()

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'profil', title: 'Profil' },
    { key: 'trips', title: 'Mes trajets' }
  ])

  return (
    <>
      <HeaderProfil />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  )
}

export default ProfileScreen
