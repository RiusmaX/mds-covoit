import { Button, Text, Container, View } from 'native-base'
import React from 'react'
import CarInfos from '../../../components/profile/CarInfos'

function AddCarModalScreen1 ({ navigation }) {
  return (
    <Container style={{ width: '100%' }} space={8}>
      <Button onPress={() => navigation.navigate('Profile')} style={{ float: 'right' }}>
        X
      </Button>
      <Text style={{ width: '100%' }} fontSize={32} fontWeight='bold'>Ma voiture</Text>
      <Container style={{ width: '100%' }} space={4}>
        <Text>Quelle est ta plaque d’immatriculation ?</Text>
        <CarInfos />
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Button
              onPress={() => navigation.navigate('Profile')}
            >
              Précedent
            </Button>
          </View>
          <View>
            <Button
              onPress={() => navigation.navigate('AddCarModalScreen2')}
            >
              Etape suivante
            </Button>
          </View>
        </View>
      </Container>
    </Container>

  )
}

export default AddCarModalScreen1
