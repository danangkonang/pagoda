import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

export default class IklanBottom extends Component {
    render() {
        return (
            <View style={styles.input}>
               <View>
                  <Text style={styles.nameInputText}>Pemilik kos</Text>
                     <TextInput
                           style={styles.inputText}
                           placeholder='Pemilik kos'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
               </View>
               <View>
                  <Text>Nomor handphone pemilik kos</Text>
                     <TextInput
                           placeholder='Nomor handphone pemilik kos'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                     />
               </View>
               <View>
                  <Text style={styles.nameInputText}>Pengelola kos</Text>
                     <TextInput
                           style={styles.inputText}
                           placeholder='Pengelola kos'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
               </View>
               <View>
                  <Text>Nomor handphone pengelola kos </Text>
                     <TextInput
                           placeholder='Nomor handphone pengelola kos '
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                     />
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
      nameInputText:{
          fontSize:16,
          fontWeight:'600'
      },
      
  })