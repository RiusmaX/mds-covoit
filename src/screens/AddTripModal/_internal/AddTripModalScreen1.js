import { Button, Input, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { useAddTripContext } from '../../../contexts/AddTripContext'
import DateTimePicker from '@react-native-community/datetimepicker'
import AutoComplete from '../../../components/autocomplete/AutoComplete'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
function AddTripModalScreen1 () {
  const { tripDatas, setTripDatas } = useAddTripContext()
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)

  const onChange = (event, selectedDate) => {
    setShowDateTimePicker(false)
    setTripDatas({ ...tripDatas, departureDate: selectedDate })
  }
  const [coordinate, setCoordinate] = useState({
    latitude: '',
    longitude: ''
  })

  console.log(coordinate)

  return (
    <VStack style={{ width: '100%' }} space={8}>
      <Text style={{ width: '100%' }} fontSize={32} fontWeight='bold'>Départ</Text>
      <VStack style={{ width: '100%' }} space={4}>
        <Text fontSize={24} fontWeight='bold'>D'où pars-tu ?</Text>
        {/* <GooglePlacesAutocomplete
        fetchDetails
        placeholder='Search'
        onPress={(data, details = null) => {
          // console.log('data', data)
          // console.log('details', details.geometry.location.lat)
          // console.log('details', details.geometry.location.lng)
          setCoordinate({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          })
        }}
        // Google places
        query={{
          key: 'AIzaSyDINzMzmZNRWimE01cdjqn_-bS9vOreAKQ',
          language: 'fr',
          components: 'country:fr'
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'grey'
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          }
        }}
      /> */}
        <Input
          onChangeText={text => setTripDatas({ ...tripDatas, departurePoint: text })}
          value={tripDatas.departurePoint}
        />
      </VStack>
      <VStack style={{ width: '100%' }} space={4}>
        <Text fontSize={24} fontWeight='bold'>Quand ?</Text>
        <Button bordered onPress={() => setShowDateTimePicker(!showDateTimePicker)}>
          <Text color='white'>{tripDatas.departureDate.toLocaleDateString()} à {tripDatas.departureDate.toLocaleTimeString()}</Text>
        </Button>
        {showDateTimePicker && (
          <DateTimePicker
            value={tripDatas.departureDate}
            is24Hour
            mode='datetime'
            onChange={onChange}
          />
        )}
      </VStack>
    </VStack>
  )
}

export default AddTripModalScreen1
