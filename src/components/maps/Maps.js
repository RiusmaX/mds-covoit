import { Avatar, Image } from 'native-base'
// import { randomColor } from 'native-base/lib/typescript/theme/tools'
import React, { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { getAllTrips } from '../../services/Api'

export const Maps = () => {
  const [trips, setTrips] = useState([])
  const [mapMargin, setMapMargin] = useState(1)
  const [mapPaddingTop, setMapPaddingTop] = useState()
  useEffect(() => {
    setTimeout(() => {
      setMapMargin(1)
      setMapMargin(1)
    }, 100)
  }, [])
  const onMapReady = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
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

  const getTrips = async () => {
    const trips = await getAllTrips()

    setTrips(trips)
  }

  useEffect(() => {
    getTrips()
  }, [])

  return (
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
    >
      {/* On ajoute sur la carte les différents points de départs */}
      {trips.data && trips?.data?.map((trip) => {
        return (
          <Marker
            key={trip.id}
            pinColor='blue'
            coordinate={{
              latitude: trip.attributes.departurePoint.latitude,
              longitude: trip.attributes.departurePoint.longitude
            }}
          >
            {/* On met l'image du pilote ou ses initiales */}
            <Avatar shadow={1} bg='primary.500' source={{ uri: trip.attributes.pilot.data.attributes.avatar || '' }}>{trip.attributes.pilot.data.attributes.username.substring(0, 2).toUpperCase()}</Avatar>
          </Marker>
        )
      })}

    </MapView>
  )
}
