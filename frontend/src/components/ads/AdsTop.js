import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'

export default class AdsTop extends Component {
    render() {
        return (
         <View style={{padding: 10}}>
            <View style={styles.input}>
               <View>
                  <Text>Nama Kost</Text>
                  <TextInput
                        style={styles.inputText}
                        placeholder='Masukkan nama kost disini...'
                        underlineColorAndroid='rgba(0,0,0,1)'
                        placeholderTextColor='#D5DBDB'
                  />
               </View>
               <View>
                  <Text>Alamat Kost</Text>
                  <TextInput
                        placeholder='Masukkan nama jalan, kecamatan, kelurahan, dll...'
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
   
   inputText:{

   }
})