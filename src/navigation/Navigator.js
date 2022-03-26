import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth } from '../contexts/AuthContext'

import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen'
import TabBar from './TabBar'
import ProfileScreen from '../screens/ProfileScreen'
import LinesScreen from '../screens/LinesScreen'
import AddTripModal from '../screens/AddTripModal/AddTripModal'
import { Maps } from '../components/maps/Maps'

const MainNavigator = createBottomTabNavigator()

const AuthNavigator = createNativeStackNavigator()

function AuthStack () {
  return (
    <AuthNavigator.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Screen name='Login' component={LoginScreen} />
      <AuthNavigator.Screen name='Register' component={RegisterScreen} />
    </AuthNavigator.Navigator>
  )
}

function MainTabNavigator () {
  return (
    <MainNavigator.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <MainNavigator.Group>
        <MainNavigator.Screen name='Home' options={{ tabBarIcon: 'home' }} component={HomeScreen} />
        <MainNavigator.Screen name='Lines' options={{ tabBarIcon: 'analytics' }} component={LinesScreen} />
        <MainNavigator.Screen name='Profile' options={{ tabBarIcon: 'person' }} component={ProfileScreen} />
      </MainNavigator.Group>
      <MainNavigator.Group screenOptions={{ presentation: 'modal' }}>
        <MainNavigator.Screen name='Modal' component={AddTripModal} />
      </MainNavigator.Group>
      <MainNavigator.Group>
        <MainNavigator.Screen name='Maps' component={Maps} />
      </MainNavigator.Group>
    </MainNavigator.Navigator>
  )
}

function Navigator () {
  const { state } = useAuth()

  if (state.user && state.token) {
    return (
      <MainTabNavigator profilIsComplete={state.phone && state.school && state.class && state.status && state.biography} />
    )
  } else {
    return (
      <AuthStack />
    )
  }
}

export default Navigator
