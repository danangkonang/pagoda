import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default class Cordinat extends Component {
    render() {
        return (
            <View style={styles.input}>
               <View style={styles.kordinat}>
                  <View style={styles.kordinatTitik}>
                     <TextInput
                        placeholder='1312344'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                     />
                  </View>
                  <View style={styles.kordinatTitik}>
                     <TextInput
                        placeholder='634577'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                     />
                  </View>

               </View>
               
            </View>
         )
      }
  }
  
  const styles = StyleSheet.create({
      
      input:{
          paddingHorizontal:5,
          marginTop:5
      },
      kordinat:{
          flexDirection:'row',
      },
      kordinatTitik:{
          flex:1
      }
      
  })