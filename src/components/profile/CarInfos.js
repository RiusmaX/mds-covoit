import React, { useState, useEffect } from 'react'
import { Button, Container, Input, Text } from 'native-base'
import { getCarInfos } from '../../services/Api_Immat'
import JSSoup from 'jssoup'

function HeaderProfil () {
  const [loading, setLoading] = useState(true)
  const [carInfos, setCarInfos] = useState([])
  const [carName, setCarName] = useState('')
  const [immat, setImmat] = useState('')

  // Rajouter le useEffect pour mettre à jour le véhicule ?
  const getCar = async () => {
    setLoading(true)
    const carInfos = await getCarInfos(immat)
    setLoading(false)
    setCarInfos(carInfos)
  }

  const onSubmit = async () => {
    getCar()

    // On récupère le nom de la voiture qui est de base format html en text
    const soup = await new JSSoup(carInfos)
    const elements = await soup.find('h2')
    const carName = await elements.text
    // const regexCarName = /\(([^()]*)\) // pour enlever les informations sur les moteurs entre parenthèse
    setCarName(carName)
  }

  console.log(immat)

  return (
    <Container
      h='100%'
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

export default HeaderProfil
