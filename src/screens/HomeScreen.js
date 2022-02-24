import React from 'react'
import { Container, Text } from 'native-base'
import ProfilNotCompleteAlert from '../components/alerts/ProfilNotCompleteAlert'
import { useAuth } from '../contexts/AuthContext'

function HomeScreen({ navigation }) {
  const { state } = useAuth()

  return (
    <>
      {state?.user?.phone && state?.user?.school && state?.user?.class && state?.user?.status && state?.user?.bio ? null :
        <ProfilNotCompleteAlert onPressGoProfile={() => navigation.navigate('Profile')} /> 
      }
      <Container w='100%'>
        <Text> HOME SCREEN </Text>
      </Container>
    </>
  )
}

export default HomeScreen
