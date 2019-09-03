import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Feather'
import Icon4 from 'react-native-vector-icons/Entypo'
import Icon5 from 'react-native-vector-icons/SimpleLineIcons'

export default class InfoKos extends Component {
render() {
    return (
        <View style={{
            paddingHorizontal:10
        }}>
            
            <View style={{
                flexDirection: 'row',
                marginVertical:10
                }}>
                <View style={{flex:2}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'red', marginRight: 5, fontWeight: "bold", marginBottom: 5}}>Putri</Text>
                        <Text style={{color: 'green', marginRight: 5, fontWeight: "bold"}}>Tinggal 1 Kamar</Text>
                    </View>
                    <Text style={{fontSize:16, fontWeight: "bold", marginBottom: 5}}>Kost MamiRooms Isma Tegalrejo Yogyakarta</Text>
                    <Text style={{color:'#ddd', fontSize: 12}}>Update 12 Agustus 2019</Text>
                </View>
                <View style={{flex:1,alignItems:'center', justifyContent: "center"}}>
                    <Icon2 name="star-circle" size={30} color="orange" />
                    <Text style={{color: 'orange'}}>Premium</Text>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                marginVertical:10,
                paddingHorizontal:10, 
                paddingVertical:10, 
                borderWidth:0.3,
                borderColor:'#ddd',
                }}>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Icon4 name="light-up" size={15} color="grey" style={{marginRight: 5}} />
                    <Text>Tidak termasuk listrik</Text>
                </View>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Icon3 name="dollar-sign" size={15} color="grey" style={{marginRight: 5}} />
                    <Text>Tidak ada min. bayar</Text>
                </View>
            </View>

            
            <View style={{marginTop: 10, marginBottom: 10}}>
                <Text style={{fontWeight: "bold", marginBottom: 5}}>Luas kamar</Text>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon5 style={{marginRight: 10}} name="size-fullscreen" size={20} color="orange" />
                <Text>5 x 3 m</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', flex:1, justifyContent:'space-between', paddingVertical:5}}>
                <View style={{flex:1}}>
                    <Text style={{fontWeight: "bold"}}>Fasilitas kost dan kamar</Text>
                    
                </View>
                <View style={{flex:1, alignItems: "flex-end"}}>
                    <Text style={{color:'orange'}}>Lihat Semua</Text>
                </View>
            </View>
            
        </View>
        
    )
}
}
