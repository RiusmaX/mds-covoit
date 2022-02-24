import React from 'react'
import { Box, Center, Text } from 'native-base'
import { useColorScheme, TouchableOpacity } from 'react-native'
import Images from '../images/Images'
import { registerUser, useAuth } from '../contexts/AuthContext'
import RegisterForm from '../components/forms/RegisterForm'

function RegisterScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const { dispatch } = useAuth()

  const handleRegister = async (registrationCredentials) => {
    await registerUser(registrationCredentials, dispatch)
  }

  return (
    <Box>
      <Center>
        {/* <Images source={isDarkMode ? Images.logoLight : Images.logoDark} size='2xl' resizeMode='contain' alt='App Logo' /> */}
        <RegisterForm onRegister={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>J'ai déjà un compte</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  )
}

export default RegisterScreen
