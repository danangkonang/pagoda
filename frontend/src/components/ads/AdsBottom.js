import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

export default class AdsBottom extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
               <View style={styles.input}>
                  <View>
                        <Text>Pemilik Kost</Text>
                        <TextInput
                           placeholder='Pemilik Kost'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
                  </View>
                  <View>
                        <Text>No hp pemilik Kost</Text>
                        <TextInput
                           placeholder='No hp pemilik Kost'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
                  </View>
                  <View>
                        <Text>Pengelola Kost</Text>
                        <TextInput
                           placeholder='Pengelola Kost'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
                  </View>
                  <View>
                        <Text>No Hp Pengelola Kost</Text>
                        <TextInput
                           placeholder='No Hp Pengelola Kost'
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
   }
})