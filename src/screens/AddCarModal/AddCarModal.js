import React, { useState, useEffect } from 'react'
import { Button, Center, Container, Text, Box, IconButton, VStack } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAddCarContext } from '../../contexts/AddCarContext'

function AddCarModal ({ navigation }) {
  const { steps, activeIndex, handleNext, handleBack } = useAddCarContext()

  const [activeStep, setActiveStep] = useState(steps[activeIndex])

  useEffect(() => {
    setActiveStep(steps[activeIndex])
  }, [activeIndex])

  return (
      <Container h='100%' w='100%'>
          <Box marginTop={2} mb={4} ml={2}>
              <Button onPress={() => navigation.goBack()}><Icon name='close-outline' /></Button>
            </Box>

          <Container w='100%' p={4}>
              <VStack style={{ width: '100%' }} space={8}>

                  <activeStep.Component />
                  {!activeStep.hideNext && (
                      <>
                          {activeIndex === steps.length - 1
                              ? (
                                  <VStack direction='row' space={4} style={{ width: '100%' }}>
                                      <Box style={{ width: '100%' }}>

                                          {activeIndex !== 0 &&
                                              <Button onPress={handleBack}>Retour</Button>}
                                          <Button onPress={() => { }}>Enregistrer ma voiture</Button>
                                        </Box>
                                    </VStack>
                                )
                              : (
                                  <VStack direction='row' space={4} w='100%'>
                                      <Box style={{ width: '100%' }}>
                                          {activeIndex !== 0 &&
                                              <Button onPress={handleBack}>Retour</Button>}
                                          <Button onPress={handleNext}>Suivant</Button>
                                        </Box>
                                    </VStack>
                                )}
                        </>
                    )}
                </VStack>
            </Container>
          <Center />
        </Container>
  )
}

export default AddCarModal
