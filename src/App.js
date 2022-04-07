import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'
import { getTheme } from './theme/Theme'
import { GeoProvider, setLocation, useGeo } from './contexts/GeoContext'
import Geolocation from 'react-native-geolocation-service'
import RNBootSplash from 'react-native-bootsplash'
import { AddTripProvider } from './contexts/AddTripContext'

const WithContext = () => {
  return (
    <GeoProvider onReady={() => RNBootSplash.hide({ fade: true })}>
      <AuthProvider>
        <AddTripProvider>
          <App />
        </AddTripProvider>
      </AuthProvider>
    </GeoProvider>
  )
}


const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const { dispatch } = useGeo()

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        console.log('NEW POSITION')
        setLocation(dispatch, position)
      },
      error => {
        console.log(error)
      },
      {
        enableHighAccuracy: true,
        fastestInterval: 1000,
        showLocationDialog: true
      }
    )
    return () => {
      Geolocation.clearWatch(watchId)
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
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer
          theme={navigationTheme}
          onReady={() => RNBootSplash.hide({ fade: true })}
        >
          <NativeBaseProvider theme={theme}>
            <Navigator />
          </NativeBaseProvider>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default WithContext
