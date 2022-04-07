import { Button, Container, Text, View } from 'native-base'
import React from 'react'

function AddCarModalScreen2 ({ navigation }) {
  return (
    <Container style={{ width: '100%' }} space={8}>
      <Button onPress={() => navigation.navigate('Profile')} style={{ float: 'right' }}>
        X
      </Button>
      <Text style={{ width: '100%' }} fontSize={32} fontWeight='bold'>Ma voiture</Text>
      <Container style={{ width: '100%' }} space={4}>
        <Text fontSize={24} fontWeight='bold'>Importe une photo de ton auto</Text>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Button
              onPress={() => navigation.navigate('AddCarModalScreen2')}
            >
              Précedent
            </Button>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate('AddCarModalScreen3')}
            >
              Etape suivante
            </Button>
          </View>
        </View>
      </Container>
    </Container>
  )
}

export default AddCarModalScreen2
