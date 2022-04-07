import React, { createContext, useContext, useState, useMemo } from 'react'
import AddTripModalScreen1 from '../screens/AddTripModal/_internal/AddTripModalScreen1'
import AddTripModalScreen2 from '../screens/AddTripModal/_internal/AddTripModalScreen2'
import AddTripModalScreen3 from '../screens/AddTripModal/_internal/AddTripModalScreen3'
import AddTripModalScreen4 from '../screens/AddTripModal/_internal/AddTripModalScreen4'
import { postTrip } from '../services/Api'
import { useAuth } from './AuthContext'

const AddTripContext = createContext()

export const useAddTripContext = () => {
  const context = useContext(AddTripContext)
  if (!context) {
    throw new Error(
      'useAddTripContext must be inside a AddTripProvider'
    )
  }
  return context
}

export const AddTripProvider = ({ children }) => {
  const { state } = useAuth()

  const steps = [
    {
      Component: AddTripModalScreen1
    },
    {
      Component: AddTripModalScreen2
    },
    // {
    //   Component: AddTripModalScreen3
    // },
    {
      Component: AddTripModalScreen4
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + 1)
  }

  const handleBack = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1)
  }

  const [tripDatas, setTripDatas] = useState({
    title: null,
    description: null,
    pilot: state?.user?.id,
    departurePoint: {
      name: null,
      latitude: '47.2813569',
      longitude: '-1.5852066'
    },
    arivalPoint: {
      name: 'Campus Eduservice',
      latitude: '47.2464485168457',
      longitude: '-1.6269460916519165'
    },
    waypoints: null,
    nbSeats: null,
    departureDate: new Date(),
    arivalDate: new Date()
  })

  const addTrip = async (tripDatas) => {
    try {
      await postTrip(tripDatas)
    } catch (error) {
      console.error('error: ', error)
    }
  }

  const value = useMemo(
    () => ({
      steps,
      activeIndex,
      setActiveIndex,
      handleNext,
      handleBack,
      addTrip,
      tripDatas,
      setTripDatas
    }),
    [
      activeIndex,
      setActiveIndex,
      addTrip,
      handleNext,
      handleBack, tripDatas, setTripDatas
    ]
  )

  return (
    <AddTripContext.Provider value={value}>
      {children}
    </AddTripContext.Provider>
  )
}
