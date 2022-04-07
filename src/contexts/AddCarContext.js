import React, { createContext, useContext, useState, useMemo } from 'react'
import AddCarModalScreen1 from '../screens/AddCarModal/AddCarModalScreens/AddCarModalScreen1'
import AddCarModalScreen2 from '../screens/AddCarModal/AddCarModalScreens/AddCarModalScreen2'
import AddCarModalScreen3 from '../screens/AddCarModal/AddCarModalScreens/AddCarModalScreen3'
import AddCarModalScreen4 from '../screens/AddCarModal/AddCarModalScreens/AddCarModalScreen4'

const AddCarContext = createContext()

export const useAddCarContext = () => {
  const context = useContext(AddCarContext)
  if (!context) {
    throw new Error(
      'useAddCarContext must be inside a AddCarProvider'
    )
  }
  return context
}

export const AddCarProvider = ({ children }) => {
  const steps = [
    {
      Component: AddCarModalScreen1
    },
    {
      Component: AddCarModalScreen2
    },
    {
      Component: AddCarModalScreen3
    },
    {
      Component: AddCarModalScreen4
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex + 1)
  }

  const handleBack = () => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex - 1)
  }

  const value = useMemo(
    () => ({
      steps,
      activeIndex,
      setActiveIndex,
      handleNext,
      handleBack,
      carDatas,
      setCarDatas
    }),
    [
      activeIndex,
      setActiveIndex,
      handleNext,
      handleBack, carDatas, setCarDatas
    ]
  )

  return (
    // value={value}
    <AddCarContext.Provider>
      {children}
    </AddCarContext.Provider>
  )
}
