import * as React from 'react'
import { Dimensions, StatusBar, Pressable } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Box, Text, useColorModeValue } from 'native-base'

const initialLayout = {
  width: Dimensions.get('window').width
}

export function TabsComponent ({ views }) {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState(views)

  const renderScene = SceneMap({
    first: views[0].component,
    second: views[1].component
  })

  const renderTabBar = props => {
    return (
      <Box flexDirection='row' width='100%'>
        {props.navigationState.routes.map((route, i) => {
          const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa')
          const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400')
          return (
            <Pressable
              key={i}
              onPress={() => {
                setIndex(i)
              }}
              alignItems='center' p='3' flex={1}
            >
              <Box borderBottomWidth='3' borderColor={borderColor} alignItems='center' p='3' style={{ width: '100%' }}>
                <Text style={{
                  color
                }}
                >{route.title}
                </Text>
              </Box>
            </Pressable>
          )
        })}
      </Box>
    )
  }

  return (
    <TabView
      navigationState={{
        index,
        routes
      }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
        marginTop: StatusBar.currentHeight
      }}
    />
  )
}
