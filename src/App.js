import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'

import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'
import { getTheme } from './theme/Theme'
import { GeoProvider, setLocation, useGeo } from './contexts/GeoContext'
import Geolocation, { clearWatch } from 'react-native-geolocation-service'
import RNBootSplash from 'react-native-bootsplash'
import { AddTripProvider } from './contexts/AddTripContext'

const WithContext = () => {
  return (
    <GeoProvider>
      <AddTripProvider>
        <App />
      </AddTripProvider>
    </GeoProvider>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const { dispatch } = useGeo()

  useEffect(() => {
    RNBootSplash.hide({ fade: true }) // fade
  }, [])

  useEffect(() => {
    const watchId = Geolocation.watchPosition((position) => {
      setLocation(dispatch, position)
    },
    (error) => {
      console.error(error)
    },
    { enableHighAccuracy: true, fastestInterval: 1000, showLocationDialog: true })
    return () => {
      clearWatch(watchId)
    }
  }, [])

  const theme = getTheme(isDarkMode)
  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#0F172A' : '#fff'
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer
          theme={navigationTheme}
          onReady={() => RNBootSplash.hide({ fade: true })}
        >
          <NativeBaseProvider theme={theme}>
            <Navigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  )
}

export default WithContext
