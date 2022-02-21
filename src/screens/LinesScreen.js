import React, { useEffect, useState } from 'react'
import { Container, Fab, Text } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import MapView from 'react-native-maps'
import { PermissionsAndroid } from 'react-native'

function LinesScreen ({ navigation }) {
  const [mapMargin, setMapMargin] = useState(1)
  const [mapPaddingTop, setMapPaddingTop] = useState()
  useEffect(() => {
    setTimeout(() => {
      setMapMargin(1)
      setMapMargin(1)
    }, 100)
  }, [])
  const onMapReady = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      .then((granted) => {
        setMapMargin(0)
        setMapMargin(0)
      })
      .finally(() => {
        setMapMargin(0)
        setMapPaddingTop(0)
      })

    setMapMargin(0)
    setMapPaddingTop(0)
  }

  return (
    <Container style={{ maxWidth: '100%', paddingTop: mapPaddingTop }} h='100%' w='100%'>
      <MapView
        provider='google'
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          marginBottom: mapMargin
        }}
        zoomControlEnabled
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        onMapReady={onMapReady}
      />
      <Fab
        onPress={() => navigation.navigate('Modal')}
        position='absolute'
        bottom={90}
        right={5}
        size='md'
        icon={<Icon name='add' size={25} />}
      />
    </Container>
  )
}

export default LinesScreen
