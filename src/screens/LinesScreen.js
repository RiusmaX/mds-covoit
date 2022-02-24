import React from 'react'
import { Center, Container, Fab } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

import { TabsComponent } from '../components/tabs/Tabs'
import { Maps } from '../components/maps/Maps'

function LinesScreen ({ navigation }) {
  return (
    <Container
      style={{ maxWidth: '100%' }}
      h='100%'
      w='100%'
    >
      <TabsComponent views={[
        {
          key: 'first',
          title: 'Liste',
          component: FirstRoute
        },
        {
          key: 'second',
          title: 'Carte',
          component: Maps
        }
      ]}
      />

      <Fab
        onPress={() => navigation.navigate('Modal')}
        position='absolute'
        bottom={90}
        right={5}
        size='md'
        icon={<Icon name='add' size={25} />}
      />
    </Container>
  )
}

const FirstRoute = () => (
  <Center flex={1} my='4'>
    This is Tab 1
  </Center>
)

export default LinesScreen
