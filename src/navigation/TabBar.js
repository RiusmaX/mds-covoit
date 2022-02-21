import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { tabBarStyle } from '../theme/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

function TabBar ({ state, descriptors, navigation }) {
  return (
    <View style={tabBarStyle.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        if (!options.tabBarIcon) {
          return null
        }

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={tabBarStyle.button}
          >
            <Icon name={`${options.tabBarIcon}${!isFocused ? '-outline' : ''}`} size={isFocused ? 30 : 25} color='#fff' />
            <Text style={isFocused ? tabBarStyle.buttonTextSelected : tabBarStyle.buttonText}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TabBar
