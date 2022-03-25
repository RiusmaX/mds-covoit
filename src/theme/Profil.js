import { Center } from 'native-base'
import { StyleSheet } from 'react-native'
import { colors } from './Theme'

const styles = StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 4,
    marginVertical: 12,
    paddingTop: 10
  },
  tags: {
    color: '#FFFFFF',
    backgroundColor: '#2CB2BF',
    borderRadius: 2,
    padding:5,
    marginLeft: 30,
    maxWidth: 120,
    marginRight: 4
  },
  tagStudent: {
    color: '#FFFFFF',
    backgroundColor: '#2CB2BF',
    borderRadius: 2,
    padding: 5,
    marginLeft: 30,
    maxWidth: 120,
    marginRight: 4
  },
  tagTrainer: {
    color: '#FFFFFF',
    backgroundColor: '#0F172A',
    borderRadius: 2,
    padding: 5,
    marginLeft: 30,
    maxWidth: 120,
    marginRight: 4
  },
  tagClass: {
    color: '#FFFFFF',
    backgroundColor: '#d6d6d6',
    borderRadius: 2,
    padding: 5,
    marginLeft: 10,
    maxWidth: 120,
    marginRight: 4
  },
  infos: {
    alignItems: 'center'
  },
  iconProfile: {
    color: '#0F172A'
  },
  logout: {
    backgroundColor: 'red',
    bottom: 0
  },
  centerHeader: {
    maxWidth: '100%',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 25
  },
  container: {
    paddingVertical: 5,
  },
  icon: {
    color: '#d6d6d6',
  },
  iconEdit: {
    color: '#0F172A',

  },
  touchable: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  iconRow: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  profileContent: {
    paddingTop: 6,
    marginLeft: 30,  
  },
  textClass: {
    paddingTop: 6,
    marginLeft: 10,
  },
  row: {
    paddingVertical: 6,
  }
})

const updateProfilStyle  = StyleSheet.create({
  formControl: {
    paddingBottom: 8,
  },
  button: {
    marginVertical: 30
  }
  // bio: {
    
  // },
  // select: {
    
  // }
})


export {
  styles,
  updateProfilStyle
}
