import React, { useState } from 'react'
import { logoutUser, useAuth } from '../../contexts/AuthContext'
import { TouchableOpacity } from 'react-native'
import { Box, Button, Center, Container, Flex, Text } from 'native-base'
import { styles } from '../../theme/Profil'
import Icon from 'react-native-vector-icons/Ionicons'
import UpdateProfilForm from '../forms/UpdateProfilForm'


function UserProfil() {
  const { dispatch, state } = useAuth()
  const [editMode, setEditMode] = useState(false)

  // Déconnexion
  const handleLogout = async () => {
    await logoutUser(dispatch)
  }

  // Récupération des informations de l'utilisateur
  const userInfos = state.user

  // Fonction pour passer en mode édition
  const onPress = () => {
    console.log(onPress)
    setEditMode(!editMode)
    console.log(editMode)
  }

  return (
    <Container
      style={{ maxWidth: '100%', alignItems: 'center' }}
      h='100%'
      w='100%'
    >
      <Box style={styles.container}>
        <Flex direction='row' style={styles.iconRow}>
          <TouchableOpacity
            accessibilityRole='button'
            onPress={onPress}
            style={styles.touchable}
          >
            <Icon name={editMode ? 'close' : 'pencil'} size={30} style={editMode ? styles.iconEdit : styles.icon} />
          </TouchableOpacity>
        </Flex>
      </Box>
      {editMode ?
        <UpdateProfilForm user={userInfos} setEditMode={setEditMode} />
        : (
          <>
            <Box>
              <Center>
                <Flex direction='row' style={styles.row}>
                  <Text style={styles.titleText}>{userInfos.firstName}</Text>
                  <Text style={styles.titleText}>{userInfos.lastName}</Text>
                </Flex>
              </Center>
              <Flex direction='row' style={styles.row}>
                <Icon name={'business-outline'} size={30} style={styles.iconProfile}/>
                <Text style={styles.tags}>{userInfos.school}</Text>

              </Flex>
              <Flex direction='row' style={styles.row}>
                <Icon name={userInfos.status === 'student' ? 'school-outline' : 'briefcase-outline'} size={30} style={styles.iconProfile} />
                <Text style={userInfos.status === 'student' ? styles.tagStudent : styles.tagTrainer}>{userInfos.status}</Text>
                {userInfos.status === 'student' && 
                  (
                    <>
                    
                    <Text style={styles.textClass}>Classe :</Text>
                    <Text style={styles.tagClass}>{userInfos.class}</Text>
                    </>
                  )
                }
              </Flex>
              <Flex direction='row' style={styles.row}>
                <Icon name={'call-outline'} size={30} style={styles.iconProfile}/>
                <Text style={styles.profileContent}>{userInfos.phone}</Text>
              </Flex>
              <Flex direction='row' style={styles.row}>
                <Icon name={'mail-outline'} size={30} style={styles.iconProfile}/>
                <Text style={styles.profileContent}>{userInfos.email}</Text>
              </Flex>
              <Flex direction='row' style={styles.row}>
                <Icon name={'newspaper-outline'} size={30} style={styles.iconProfile}/>
                <Text style={styles.profileContent}>{userInfos.bio}</Text>
              </Flex>

            </Box>
            <Box style={styles.container}>
              <Text style={styles.titleText}>Véhicules</Text>
            </Box>
            <Button onPress={handleLogout} style={styles.logout} size='md'>Se déconnecter</Button>
          </>
        )
      }
    </Container>
  )
}

export default UserProfil
