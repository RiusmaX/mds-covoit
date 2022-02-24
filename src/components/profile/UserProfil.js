import React from 'react'
import { logoutUser, useAuth } from '../../contexts/AuthContext'
import { Button, Container, Text } from 'native-base'

function UserProfil () {
  const { dispatch } = useAuth()

  const handleLogout = async () => {
    await logoutUser(dispatch)
  }
  return (
    <Container>
      <Text>USER PROFILE</Text>
      <Button onPress={handleLogout} style={{ backgroundColor: 'red' }} size='md'>Se déconnecter</Button>
    </Container>
  )
}

export default UserProfil
