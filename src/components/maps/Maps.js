// import { Avatar, Image } from 'native-base'
// // import { randomColor } from 'native-base/lib/typescript/theme/tools'
// import React, { useEffect, useState } from 'react'
// import { StyleSheet, View } from 'react-native'
// import { useGeo, getLocation } from '../../contexts/GeoContext'
// import { getAllTrips } from '../../services/Api'
// import MapboxGL from '@react-native-mapbox-gl/maps'
// import { lineString as makeLineString } from '@turf/helpers'
// // import mbxDirections from '@mapbox/mapbox-sdk/services/directions'
// const mbxDirections = require('@mapbox/mapbox-sdk/services/styles')

// const mapboxToken = 'sk.eyJ1Ijoia2VyaGFjNDQiLCJhIjoiY2wwMmp4ODQ1MDQ1bzNkcXBkZmVidjQ1eiJ9.8QTY8SKxsc3D5uNPV5lVNQ'

// MapboxGL.setAccessToken(mapboxToken)
// const Directions = mbxDirections({ accessToken: mapboxToken })

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   container: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: 'tomato'
//   },
//   map: {
//     flex: 1
//   }
// })

// export const Maps = () => {
//   // coordonée de test
//   const startingPoint = [3.3362400, 6.5790100]
//   const destinationPoint = [3.3750014, 6.5367877]
//   // state pour la route
//   const [route, setRoute] = useState(null)
//   // point de départ et d'arrivé
//   const startDestinationPoints = [startingPoint, destinationPoint]
//   // de base
//   const [trips, setTrips] = useState([])
//   const { dispatch, state: { data } } = useGeo()
//   const [coordinates, setCoordinates] = useState()

//   useEffect(() => {
//     getLocation(dispatch)
//     if (data) setCoordinates([data?.coords.longitude, data?.coords.latitude])
//   }, [])

//   useEffect(() => {
//     fetchRoute()
//   })

//   const fetchRoute = async () => {
//     const reqOptions = {
//       waypoints: [
//         { coordinates: startingPoint },
//         { coordinates: destinationPoint }
//       ],
//       profile: 'driving-traffic',
//       geometries: 'geojson'
//     }

//     const res = await Directions.getDirections(reqOptions).send()

//     const newRoute = makeLineString(res.body.routes[0].geometry.coordinates)
//     setRoute(newRoute)
//   }

//   const renderAnnotations = () => {
//     return (
//       startDestinationPoints.map((point, index) => (
//         <MapboxGL.PointAnnotation
//           key={`${index}-PointAnnotation`}
//           id={`${index}-PointAnnotation`}
//           coordinate={point}
//         >
//           <View style={{
//             height: 30,
//             width: 30,
//             backgroundColor: '#00cccc',
//             borderRadius: 50,
//             borderColor: '#fff',
//             borderWidth: 3
//           }}
//           />
//         </MapboxGL.PointAnnotation>
//       ))
//     )
//   }

//   // const getTrips = async () => {
//   //   const trips = await getAllTrips()
//   //   setTrips(trips)
//   // }

//   // useEffect(() => {
//   //   getTrips()
//   // }, [])

//   return (
//     <View style={styles.page}>
//       <View style={styles.container}>
//         <MapboxGL.MapView
//           styleURL={MapboxGL.StyleURL.Street}
//           zoomLevel={11}
//           centerCoordinate={startingPoint}
//           style={{ flex: 1 }}
//         >
//           <MapboxGL.Camera
//             zoomLevel={11}
//             centerCoordinate={startingPoint}
//             animationMode='flyTo'
//             animationDuration={0}
//           />
//           {renderAnnotations()}
//           {
//             route && (
//               <MapboxGL.ShapeSource id='shapeSource' shape={route}>
//                 <MapboxGL.LineLayer id='lineLayer' style={{ lineWidth: 5, lineJoin: 'bevel', lineColor: '#ff0000' }} />
//               </MapboxGL.ShapeSource>
//             )
//           }
//         </MapboxGL.MapView>
//       </View>
//     </View>
//   )

//   // return (
//   //   <View style={styles.page}>
//   //     <View style={styles.container}>
//   //       <MapboxGL.MapView
//   //         style={styles.map}
//   //         zoomEnabled
//   //         scrollEnabled
//   //         pitchEnabled
//   //         rotateEnabled
//   //         compassEnabled
//   //         logoEnabled={false}
//   //         attributionEnabled={false}
//   //       >
//   //         {coordinates !== 'undefined' && <MapboxGL.PointAnnotation coordinate={coordinates} />}
//   //         {coordinates !== 'undefined' &&
//   //           <MapboxGL.Camera
//   //             zoomLevel={8}
//   //             centerCoordinate={coordinates}
//   //           />}
//   //       </MapboxGL.MapView>
//   //     </View>
//   //   </View>
//   // )
// }

import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useGeo, getLocation } from '../../contexts/GeoContext'
// import { getAllTrips } from '../../services/Api'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { lineString as makeLineString } from '@turf/helpers'
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions'

const accessToken = 'sk.eyJ1Ijoia2VyaGFjNDQiLCJhIjoiY2wwMmp4ODQ1MDQ1bzNkcXBkZmVidjQ1eiJ9.8QTY8SKxsc3D5uNPV5lVNQ'

MapboxGL.setAccessToken(accessToken)

const directionsClient = MapboxDirectionsFactory({ accessToken })

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato'
  },
  map: {
    flex: 1
  }
})

export const Maps = () => {
  const startingPoint = [-1.542727915806437, 47.21802680279227]
  const destinationPoint = [-1.6192593177734804, 47.24401906505962]

  // state qui contient le chemin
  const [route, setRoute] = useState(null)

  // tableau qui contient le point de départ et d'arrivé, il sert pour faire la route
  const startDestinationPoints = [startingPoint, destinationPoint]

  //   const [trips, setTrips] = useState([])
  const { dispatch, state: { data } } = useGeo()
  const [coordinates, setCoordinates] = useState()

  useEffect(() => {
    getLocation(dispatch)
    if (data) setCoordinates([data?.coords.longitude, data?.coords.latitude])
  }, [])

  useEffect(() => {
    fetchRoute()
  })

  // const getTrips = async () => {
  //   const trips = await getAllTrips()
  //   setTrips(trips)
  // }

  // useEffect(() => {
  //   getTrips()
  // }, [])

  /**
   * La requête qui permet de calculer le chemin pour aller d'un point A à un point B
   */
  const fetchRoute = async () => {
    const reqOptions = {
      waypoints: [
        { coordinates: startingPoint },
        { coordinates: destinationPoint }
      ],
      profile: 'driving-traffic',
      geometries: 'geojson',
      overview: 'full'
    }

    const res = await directionsClient.getDirections(reqOptions).send()
    console.log(res)

    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates)
    setRoute(newRoute)
  }

  /**
   * Génère les différent point sur la carte
   * @returns Liste de composant
   */
  const renderAnnotations = () => {
    console.log(startDestinationPoints)
    return (
      <>
        {startDestinationPoints.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}
          >
            <View style={{
              height: 30,
              width: 30,
              backgroundColor: '#00cccc',
              borderRadius: 50,
              borderColor: '#fff',
              borderWidth: 3
            }}
            />
          </MapboxGL.PointAnnotation>
        ))}
        <MapboxGL.PointAnnotation coordinate={coordinates} />
      </>
    )
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={11}
          centerCoordinate={startingPoint}
          zoomEnabled
          scrollEnabled
          pitchEnabled
          rotateEnabled
          compassEnabled
          logoEnabled={false}
          attributionEnabled={false}
        >
          <MapboxGL.Camera
            zoomLevel={11}
            centerCoordinate={coordinates}
            animationDuration={0}
          />
          {renderAnnotations()}
          {
            route && (
              <MapboxGL.ShapeSource id='shapeSource' shape={route}>
                <MapboxGL.LineLayer id='lineLayer' style={{ lineWidth: 5, lineJoin: 'bevel', lineColor: '#000' }} />
              </MapboxGL.ShapeSource>
            )
          }
        </MapboxGL.MapView>
      </View>
    </View>
  )
}
