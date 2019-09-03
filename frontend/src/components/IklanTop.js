import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';



export default class IklanTop extends Component {
    render() {
        return (
            <View style={styles.input}>
               <View>
                  <Text style={styles.nameInputText}>Nama kos</Text>
                     <TextInput
                           style={styles.inputText}
                           placeholder='Nama kos'
                           underlineColorAndroid='rgba(0,0,0,1)'
                           placeholderTextColor='#D5DBDB'
                        />
               </View>
               <View>
                  <Text>Alamat kos</Text>
                     <TextInput
                           placeholder='Alamat kos'
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