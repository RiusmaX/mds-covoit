import { Container, View } from 'native-base'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const AutoComplete = () => {
  const [coordinate, setCoordinate] = useState({
    latitude: '',
    longitude: ''
  })
  return (
    <View style={{ width: 500, marginTop: 10, position: 'absolute', zIndex: 10 }} keyboardShouldPersistTaps='always'>
      <GooglePlacesAutocomplete
        enablePoweredByContainer={false}
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
        onFail={error => console.error(error)}
        // Google places
        query={{
          key: 'AIzaSyDINzMzmZNRWimE01cdjqn_-bS9vOreAKQ',
          language: 'fr',
          components: 'country:fr'
        }}
        styles={{
          container: {
            zIndex: 100,
            elevation: 3
          },
          listView: {
            zIndex: 100,
            elevation: 3
          },
          row: {
            zIndex: 100,
            elevation: 3
          },
          textInputContainer: {
            backgroundColor: 'grey',
            color: '#000',
            width: '100%'
          },
          description: {
            color: '#000',
            zIndex: 100,
            elevation: 3
          },
          textInput: {
            height: 38,
            fontSize: 16,
            color: '#000'
          },
          predefinedPlacesDescription: {
            color: '#000'
          }
        }}
      />
    </View>
  )
}

export default AutoComplete
