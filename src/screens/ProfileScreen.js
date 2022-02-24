import React from 'react'
import { Container, Text, Button } from 'native-base'
import { logoutUser, useAuth } from '../contexts/AuthContext'

function ProfileScreen () {
  const { dispatch } = useAuth()

  const handleLogout = async () => {
    await logoutUser(dispatch)
  }

  return (
    <Container>
      <Text>PROFILE SCREEN</Text>
      <Button onPress={handleLogout} style={{ backgroundColor: 'red' }} size='md'>Se déconnecter</Button>
    </Container>
  )
}

export default ProfileScreen
