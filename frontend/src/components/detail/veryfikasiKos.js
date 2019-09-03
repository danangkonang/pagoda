import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class boxBooking extends Component {
render() {
    return (
        <View>
            <View>
                <Text>Verivikasi</Text>
            </View>
            <View>
                <Text>Kos belum di kunjungi</Text>
                <Text>Telephone sudah terverifikasi</Text>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text>ada data yang kurang atau ada kendala lainya</Text>
                    
                </View>
                <View style={{flex:1}}>
                    <Text>laporkan</Text>
                </View>
            </View>

            <View>
                <Text>Kos menarik lainya</Text>
            </View>
            
        </View>
        
    )
}
}
