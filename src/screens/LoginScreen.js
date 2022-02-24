import React from 'react'
import { Box, Center, Image, Text } from 'native-base'
import Images from '../images/Images'
import LoginForm from '../components/forms/LoginForm'
import { TouchableOpacity, useColorScheme } from 'react-native'
import { loginUser, useAuth } from '../contexts/AuthContext'

function LoginScreen ({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark'

  const { dispatch } = useAuth()

  const handleLogin = async (credentials) => {
    await loginUser(credentials, dispatch)
  }

  return (
    <Box>
      <Center>
        <Image source={isDarkMode ? Images.logoLight : Images.logoDark} size='2xl' resizeMode='contain' alt='App Logo' />
        <LoginForm onLogin={handleLogin} />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Pas de compte ?</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  )
}

export default LoginScreen
