import React, { useEffect, useState } from 'react'
import { PermissionsAndroid } from 'react-native'
import MapView from 'react-native-maps'

export const Maps = () => {
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
    />
  )
}
