import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
    render() {
        return (
         <View style={styles.header}>
            <View style={styles.iconHeader}>
                <Icon name="arrow-left" size={15} color="#FFF" onPress={() => this.props.navigate('Search')} />
            </View>
            <View style={styles.textHeader}>
                <Text style={{fontSize:18, color:'#FFF'}}>Pasang Iklan</Text>
            </View>
         </View>
        )
      }
  }
  
const styles = StyleSheet.create({
    
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        paddingHorizontal:10,
        paddingVertical:10
    },
    textHeader:{
        flex:3,
    },
    iconHeader:{
        flex:1,

    }
    
})