import { Button, Container, Input, Text, View } from 'native-base'
import React from 'react'

function AddCarModalScreen3({ navigation }) {
  return (
    <Container style={{ width: '100%' }} space={8}>
      <Button onPress={() => navigation.navigate('Profile')}>
        X
      </Button>
      <Text style={{ width: '100%' }} fontSize={32} fontWeight='bold'>Ma voiture</Text>
      <Container style={{ width: '100%' }} space={4}>
        <Text fontSize={24} fontWeight='bold'>Quel nom veux-tu lui donner ?</Text>
        <Input
          mx='3' placeholder='ex : Le cercueil roulant' w='93%'
        />
        <Text fontSize={24} fontWeight='bold'>Comment décrirais-tu ta voiture ?</Text>
        <Input
          mx='3' placeholder='Ma superbe voiture qui va vite' w='93%'
        />
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Button
              onPress={() => navigation.navigate('AddCarModalScreen3')}
            >
              Précedent
            </Button>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate('AddCarModalScreen4')}
            >
              Etape suivante
            </Button>
          </View>
        </View>
      </Container>
    </Container>
  )
}

export default AddCarModalScreen3
