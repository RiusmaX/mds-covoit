import React from 'react'
import { Container, Text } from 'native-base'
import ProfilNotCompleteAlert from '../components/alerts/ProfilNotCompleteAlert'

function HomeScreen ({ navigation }) {
  return (
    <>
      <ProfilNotCompleteAlert navigation />
      <Container w='100%'>
        <Text> HOME SCREEN </Text>
      </Container>
    </>
  )
}

export default HomeScreen
