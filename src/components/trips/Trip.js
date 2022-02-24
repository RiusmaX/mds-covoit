import { Avatar, Badge, Box, Text, VStack } from 'native-base'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

/**
 *
 * @param {props} trip
 * @returns One trip
 */
function Trip ({ trip }) {
  return (
    <VStack style={{ width: '100%' }} p={3} flexDirection='row' alignItems='center' justifyContent='space-between' borderBottomWidth={0.5} borderColor='primary.200'>
      <Box flex={1} flexDirection='column' justifyContent='space-between'>
        <Text>{new Date(trip.departureDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        <Box borderColor='primary.500' borderLeftWidth={3} style={{ height: 50 }} marginLeft={4} />
        <Text>{new Date(trip.arrivalDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </Box>
      <Box flex={2}>
        <Text marginBottom={2}>{trip.title}</Text>
        <Badge marginBottom={2} bgColor='primary.300' flexDirection='row' style={{ borderRadius: 3, width: '50%', alignItems: 'center', justifyContent: 'center' }}>{trip.nbSeats} places</Badge>
        <Box flexDirection='row' alignItems='center' marginBottom={2}>

          {/* L'api strapi ne permet pas encore de récupérer l'avatar */}
          <Avatar bg='orange.300' marginRight={2} size={10} source={{ uri: trip?.pilot?.data?.attributes?.avatar || '' }}>{trip.pilot.data.attributes.username.substring(0, 2).toUpperCase()}</Avatar>
          <Text>{trip.pilot.data.attributes.username}</Text>
          <Avatar.Group size='xs' max={3}>
            {trip.passengers.data.map((passenger) => {
              return (
                <Avatar bg='orange.300' size='xs' key={passenger.id} source={{ uri: passenger?.attributes?.avatar || '' }}>{passenger?.attributes.username.substring(0, 2).toUpperCase()}</Avatar>
              )
            })}
          </Avatar.Group>
        </Box>
      </Box>
      <Box flex={1} alignItems='flex-end'>
        <Icon name='chevron-forward-outline' size={20} />
      </Box>
    </VStack>
  )
}

export default Trip
