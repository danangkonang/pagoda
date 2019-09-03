import React, { Component } from 'react';
import { Text } from 'react-native'
import { Button } from 'native-base'


export default class Footter extends Component {
    render() {
        return (
            <Button style={{backgroundColor: "#1BAA56", justifyContent: "center",marginBottom:5}}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Booking</Text>
            </Button>
         )
      }
  }