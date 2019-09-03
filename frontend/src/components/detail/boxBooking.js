import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class boxBooking extends Component {
render() {
    return (
        <View style={{marginHorizontal:2}}>
            
            <View style={{
                flexDirection:'row',
                borderColor:'#ddd',
                borderWidth:0.3,
                marginVertical:2,
                paddingHorizontal:5
                }}>

                <View style={{flex:1, justifyContent: "center"}}>
                    <Text style={{fontWeight: "bold", marginLeft: 5}}>Rp. 1.500.000 / bulan</Text>
                    <Text style={{color:'orange', marginLeft: 5}}>Lihat semua harga</Text>
                </View>
                <View style={{flex:1,flexDirection:'row', height:65,padding:5, justifyContent: "center"}}>
                    <View style={{flex:1, justifyContent: "center"}}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderColor:'#F98F0B',
                                borderRadius:3,
                                height:50,
                                justifyContent: "center",
                                backgroundColor:'transparent'
                            }}
                        >
                            <Text style={{textAlign :'center', color: 'orange', fontWeight: "bold", fontSize: 17}}>Hubungi Kost</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, marginRight: -7, justifyContent: "center"}}>
                        <TouchableOpacity
                            style={{
                                borderRadius:3,
                                height:50,
                                padding:7,
                                backgroundColor:'#F98F0B',
                                marginHorizontal:5,
                                justifyContent: "center"
                            }}
                            >
                            <Text style={{textAlign :'center', color: 'white', fontSize: 17}} onPress={()=> {this.props.navigate('BookingDetail')}}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
        
    )
}
}
