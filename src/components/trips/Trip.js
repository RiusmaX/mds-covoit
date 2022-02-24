import { Avatar, Badge, Box, Text, VStack } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

function Trip() {
  return (
    <VStack style={{ width: '100%' }} shadow={3} p={3} flexDirection='row' alignItems='center' justifyContent='space-between'>
      <Box flex={1} flexDirection='column' justifyContent='space-between'>
        <Text>O8 :05</Text>
        <Text>O8 :05</Text>
      </Box>
      <Box flex={2}>
        <Text marginBottom={2}>ADRESSE</Text>
        <Badge marginBottom={2}>3 places</Badge>
        <Box flexDirection='row' alignItems='center' marginBottom={2}>
          <Avatar marginRight={2} />
          <Text>PRENOM</Text>
        </Box>
      </Box>
      <Box flex={1} alignItems='flex-end'>
        <Icon name='chevron-forward-outline' size={20} />
      </Box>
    </VStack>
  )
}

export default Trip
