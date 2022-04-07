import { Box, Button, CheckIcon, Container, Select, Text, View } from 'native-base'
import React from 'react'

function AddCarModalScreen4({ navigation }) {
  const [place, setPlace] = React.useState('')
  return (
    <Container style={{ width: '100%' }} space={8}>
      <Button onPress={() => navigation.navigate('Profile')}>
        X
      </Button>
      <Text style={{ width: '100%' }} fontSize={32} fontWeight='bold'>Ma voiture</Text>
      <Container style={{ width: '100%' }} space={4}>
        <Text fontSize={24} fontWeight='bold'>Combien de places libre possèdes-tu ?</Text>
        <Box w='3/4' maxW='300'>
          <Select
            selectedValue={place} width='93%' accessibilityLabel='Nombre de places' placeholder='Nombre de places' _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size='5' />
            }} mt={1} onValueChange={itemValue => setPlace(itemValue)}
          >
            <Select.Item label='1' value='1' />
            <Select.Item label='2' value='2' />
            <Select.Item label='3' value='3' />
            <Select.Item label='4' value='4' />
            <Select.Item label='5' value='5' />
            <Select.Item label='6' value='6' />
            <Select.Item label='7' value='7' />
            <Select.Item label='8' value='8' />
          </Select>
        </Box>
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
              onPress={() => navigation.navigate('Profile')}
            >
              Importer ma voiture
            </Button>
          </View>
        </View>
      </Container>
    </Container>

  )
}

export default AddCarModalScreen4
