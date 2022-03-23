import React from 'react'
import { Button, Container, Image } from 'native-base'
import { styles } from '../../theme/Profil'
import { GetPicture } from '../pictures/GetPicture'

function HeaderProfil () {
  return (
    <Container
      style={styles.centerHeader}
      h='15%'
      w='100%'
    >
      {/* <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg'
        }} alt='Alternate Text' size='xl' borderRadius={100}
      /> */}
      <GetPicture img='https://wallpaperaccess.com/full/317501.jpg' />

    </Container>
  )
}

export default HeaderProfil
