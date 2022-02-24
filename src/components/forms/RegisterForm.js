import React, { useState } from 'react'
import { Container, Button, FormControl, Input, WarningOutlineIcon } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { loginStyle } from '../../theme/Styles'

function RegisterForm ({ onRegister }) {
  const [showPassword, setShowPassword] = useState(false)
  const [registrationCredentials, setRegistrationCredentials] = useState({
    username: '',
    email: '',
    password: '',
    // phone: '',
    firstName: '',
    lastName: ''
    // avatar: '',
    // school: '',
    // class: '',
    // status: '',
    // biography: ''
  })

  return (
    // top -40px pour ne pas avoir à scroll pour voirl'entiereté de la page
    <Container w='80%' top='-40px'>
      <FormControl>
        <FormControl.Label>Nom d'utilisateur</FormControl.Label>
        <Input
          onChangeText={text => setRegistrationCredentials({ ...registrationCredentials, username: text })}
          value={registrationCredentials.username}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Prénom</FormControl.Label>
        <Input
          onChangeText={text => setRegistrationCredentials({ ...registrationCredentials, firstName: text })}
          value={registrationCredentials.firstName}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Nom</FormControl.Label>
        <Input
          onChangeText={text => setRegistrationCredentials({ ...registrationCredentials, lastName: text })}
          value={registrationCredentials.lastName}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Adresse email de l'école</FormControl.Label>
        <Input
          onChangeText={text => setRegistrationCredentials({ ...registrationCredentials, email: text })}
          value={registrationCredentials.email}
          placeholder='john.doe@my-digital-school.org'
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input
          onChangeText={text => setRegistrationCredentials({ ...registrationCredentials, password: text })}
          value={registrationCredentials.password}
          type={showPassword ? 'text' : 'password'}
          InputRightElement={
            <Button
              size='xs'
              rounded='none'
              w='1/6'
              h='full'
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Icon name='eye' size={25} /> : <Icon name='eye-off' size={25} />}
            </Button>
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <Button style={loginStyle.button} w='100%' h='10' size='md' onPress={() => onRegister(registrationCredentials)}>S'inscrire</Button>
    </Container>
  )
}

export default RegisterForm
