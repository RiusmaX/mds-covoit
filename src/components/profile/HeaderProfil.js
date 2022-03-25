import React, { useState } from 'react'
import { Avatar, Button, Container, Icon, Image } from 'native-base'
import { styles } from '../../theme/Profil'
import { GetPicture } from '../pictures/GetPicture'

function HeaderProfil () {
  const [profilePicture, setProfilePicture] = useState('https://wallpaperaccess.com/full/317501.jpg')

  return (
    <Container
      style={styles.centerHeader}
      h='15%'
      w='100%'
    >
      <GetPicture img={profilePicture} setPicture={setProfilePicture}>
        <>
          <Avatar source={{ uri: profilePicture }} size='xl' />
          <Icon
            name='refresh'
            style={{ position: 'absolute', color: 'black', bottom: 0, right: 0 }}
            size={25}
          />
        </>
      </GetPicture>

    </Container>
  )
}

export default HeaderProfil
