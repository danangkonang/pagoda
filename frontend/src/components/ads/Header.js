import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
               <Icon name='bars' color='white' size={18} />
               <Text style={{fontWeight: "bold", color:'#fff'}}>Tambah Data Iklan</Text>
               <Icon name='comment-alt' color='white' size={18} onPress={() => {this.props.navigation.navigate('Chat')}}/>
            </View>
         )
      }
  }

  const styles = StyleSheet.create({
        header :{
            flexDirection :'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 15,
            backgroundColor:'#1baa56'
        }
        
    })