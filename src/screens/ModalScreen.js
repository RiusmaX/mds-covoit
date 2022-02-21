import React from 'react'
import { Button, Center, Container, Text } from 'native-base'

function ModalScreen ({ navigation }) {
  return (
    <Container h='100%' w='100%'>
      <Center>
        <Text>MODAL SCREEN</Text>
        <Button onPress={() => navigation.goBack()}>FERMER LE MODAL</Button>
      </Center>
    </Container>
  )
}

export default ModalScreen
