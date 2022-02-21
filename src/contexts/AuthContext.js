
import React, { createContext, useContext, useReducer } from 'react'
// import { login } from '../services/api'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ERROR: 'ERROR'
}

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState, token: action.data.token, user: action.data.user
      }
    case actionTypes.ERROR:
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // useEffect(() => {
  // }, [state])

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

const loginUser = async (credentials, dispatch) => {
  try {
    const data = {
      token: 'TESTTOKENBIDON',
      user: { firstName: 'Toto', lastName: 'Tata' }
    }
    dispatch({
      type: actionTypes.LOGIN,
      data: { user: data.user, token: data.token }
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ERROR,
      data: { error: error.message }
    })
  }
}

export {
  useAuth,
  AuthProvider,
  actionTypes,
  loginUser
}
