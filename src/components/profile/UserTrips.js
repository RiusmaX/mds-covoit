import React from 'react'
import {
  Text,
  Container,
  VStack,
  Switch
} from 'native-base'

function UserTrips () {
  return (
    <Container>
      <Text> USER TRIPS COMPONENT</Text>
      <VStack space={4} alignItems='center'>
        <Switch size='md' />
      </VStack>
    </Container>
  )
}

export default UserTrips
