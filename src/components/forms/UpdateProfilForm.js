import React, { useState } from 'react'
import {
  Center,
  Container,
  FormControl,
  Input,
  ScrollView,
  Select,
  Button
} from 'native-base'
import { updateProfilStyle } from '../../theme/Profil'
import { updateUserProfil } from '../../services/Api'
import { useAuth, actionTypes } from '../../contexts/AuthContext'

function UpdateProfilForm({ user, setEditMode }) {

  const { dispatch, state } = useAuth()

  const [updateUser, setUpdateUser] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    bio: user.bio,
    school: user.school,
    status: user.status,
    class: user.class,
  })

  // Modification du profil à la soumission du formulaire et fin du mode édition
  const onUpdate = async () => {
    const data = {
      username: updateUser.username,
      firstName: updateUser.firstName,
      lastName: updateUser.lastName,
      phone: updateUser.phone,
      email: updateUser.email,
      bio: updateUser.bio,
      status: selectedStatus,
      class: updateUser.class,
    }
    const response = await updateUserProfil(data)
    dispatch({
      type: actionTypes.UPDATE_PROFILE,
      data: {
        user: response
      }
    })
    setEditMode(false)
  }

  // Changement de status dans le select
  const [selectedStatus, setSelectedStatus] = React.useState(updateUser.status);

  return (
    <ScrollView style={{ maxWidth: '100%' }}
      h='100%'
      w='100%'>
      <Center>
        <Container
          style={{ maxWidth: '100%', alignItems: 'center' }}
          h='100%'
          w='80%'
          paddingBottom={20}
          paddingTop={5}
        >
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Nom d'utilisateur</FormControl.Label>
            <Input
              value={updateUser.username}
              onChangeText={text => setUpdateUser({ ...updateUser, username: text })}
              placeholder="Mon nom d'utilisateur"
              isRequired
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Prénom</FormControl.Label>
            <Input
              value={updateUser.firstName}
              onChangeText={text => setUpdateUser({ ...updateUser, firstName: text })}
              placeholder="Mon prénom"
              isRequired
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Nom</FormControl.Label>
            <Input
              value={updateUser.lastName}
              onChangeText={text => setUpdateUser({ ...updateUser, lastName: text })}
              placeholder="Mon nom"
              isRequired
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Adresse email de l'école</FormControl.Label>
            <Input
              value={updateUser.email}
              onChangeText={text => setUpdateUser({ ...updateUser, email: text })}
              placeholder="Mon adresse email"
              isRequired
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Téléphone</FormControl.Label>
            <Input
              value={updateUser.phone}
              onChangeText={text => setUpdateUser({ ...updateUser, phone: text })}
              placeholder="Mon numéro de téléphone"
              isRequired
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Bio</FormControl.Label>
            <Input
              value={updateUser.bio}
              onChangeText={text => setUpdateUser({ ...updateUser, bio: text })}
              placeholder="Ma bio"
            />
          </FormControl>
          <FormControl style={updateProfilStyle.formControl}>
            <FormControl.Label>Status</FormControl.Label>
            <Select
              style={{ maxWidth: '100%' }} w='100%'
              selectedValue={selectedStatus}
              onValueChange={itemValue => setSelectedStatus(itemValue)}
            >
              <Select.Item label='prof' value="trainer" />
              <Select.Item label='étudiant' value="student" />
            </Select>
          </FormControl>
          {selectedStatus === "student" &&
            (
              <FormControl style={updateProfilStyle.formControl}>
                <FormControl.Label>Classe</FormControl.Label>
                <Input
                  value={updateUser.class}
                  onChangeText={text => setUpdateUser({ ...updateUser, class: text })}
                  placeholder="Ma classe"
                />
              </FormControl>
            )
          }
          <Button
            style={updateProfilStyle.button}
            w='100%'
            h='10'
            size='md'
            onPress={() => onUpdate(updateUser, selectedStatus)}
          >
            Confirmer
          </Button>
        </Container>
      </Center>
    </ScrollView>

  )
}

export default UpdateProfilForm