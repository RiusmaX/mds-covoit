import React, { useState } from 'react'
import { Button, Container, Input, Text } from 'native-base'
import { getCarInfos } from '../../services/Api_Immat'
import JSSoup from 'jssoup'

function CarInfos() {
  const [loading, setLoading] = useState(true)
  const [carName, setCarName] = useState('')
  const [immat, setImmat] = useState('')

  // Récupération des informations sur le véhicule par l'appel api avec chargement
  const getCar = async () => {
    setLoading(true)
    const result = await getCarInfos(immat)
    setLoading(false)
    return result
  }

  // Fonction appelé au moment du clic sur le bouton
  const onSubmit = async () => {
    const result = await getCar()

    // On récupère le nom de la voiture qui est de base format html, et on le transforme en format text
    const soup = await new JSSoup(result)
    const elements = await soup.find('h2')
    const carName = await elements.text

    setCarName(carName)
  }

  return (
    <Container
      w='100%'
    >
      <Input
        onChangeText={text => setImmat({ immat: text })}
        value={immat}
        placeholder='AA-123-BB'
      />
      <Button onPress={() => onSubmit()}>
        Voiture
      </Button>
      {loading && <Text>Loading</Text>}
      {!loading && (
        <Text>
          {carName}
        </Text>
      )}
    </Container>
  )
}

export default CarInfos
