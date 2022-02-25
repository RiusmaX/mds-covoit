import React, { useState } from 'react'
import { Button, Container, Text } from 'native-base'
import ProfilNotCompleteAlert from '../components/alerts/ProfilNotCompleteAlert'
import { useAuth } from '../contexts/AuthContext'
import { useGeo, getLocation } from '../contexts/GeoContext'

function HomeScreen ({ navigation }) {
  const { state } = useAuth()
  const { dispatch, state: { data } } = useGeo()

  const handleLocationPress = () => {
    getLocation(dispatch)
  }

  return (
    <>
      {state?.user?.phone && state?.user?.school && state?.user?.class && state?.user?.status && state?.user?.bio
        ? null
        : <ProfilNotCompleteAlert onPressGoProfile={() => navigation.navigate('Profile')} />}
      <Container w='100%'>
        <Text> HOME SCREEN </Text>
        <Button onPress={handleLocationPress}>GET GEOLOC</Button>
      </Container>
    </>
  )
}

export default HomeScreen
