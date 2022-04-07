import { View } from 'native-base'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const AutoComplete = ({ setCoordinate }) => {
  return (
    <View style={{ width: 500, height: 100, zIndex: 10, marginTop: 10 }}>
      <GooglePlacesAutocomplete
        fetchDetails
        placeholder='Search'
        onPress={(data, details = null) => {
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
      />
    </View>
  )
}

export default AutoComplete
