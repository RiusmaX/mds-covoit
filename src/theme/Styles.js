import { StyleSheet } from 'react-native'
import { colors } from '../theme/Theme'

const tabBarStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: colors.background,
    paddingVertical: 10
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: colors.primary[50],
    fontSize: 15
  },
  buttonTextSelected: {
    textAlign: 'center',
    color: colors.primary[50],
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const loginStyle = StyleSheet.create({
  input: {
    marginVertical: 30
  },
  button: {
    marginVertical: 30
  }
})

export {
  tabBarStyle,
  loginStyle
}
