import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'
import MapView, {Marker} from 'react-native-maps';

export default class Map extends Component {
   onRegionChange(region) {
      this.setState({ region });
   }

    render() {
        return (
            <View>
               <View style={styles.containerMap}>
                  <MapView
                     style={styles.map}
                     initialRegion={{
                        latitude: -6.301608,
                        longitude: 106.735095,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                     }}
                     >
                     <Marker
                        draggable
                        coordinate={{
                        latitude: -6.301608,
                        longitude: 106.735095,
                        }}
                        // onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                        onDragEnd={
                           (e) => {
                              const latitude = e.nativeEvent.coordinate.latitude
                              const longitude = e.nativeEvent.coordinate.longitude
                           }
                        }
                        title={'Kos'}
                        description={'koskosan murah'}
                     />
                  </MapView>
               </View>

              
            </View>

         )
      }
  }

  const styles = StyleSheet.create({
   
   kordinat:{
      flexDirection:'row',
  },
  kordinatTitik:{
      flex:1
  },
  containerMap:{
     margin: 10,
     height:200
   },
  map: {
   position:'absolute',
   top:0,
   left:0,
   right:0,
   bottom:0,
 },
})