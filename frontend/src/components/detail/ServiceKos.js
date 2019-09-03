import React, { Component } from 'react'
import {
    View,
    Text, ScrollView, TouchableOpacity, Image, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

export default class infoKos extends Component {

    constructor(){
        super();
        this.cities = [{
            id : '1',
            city: 'Tinggal 1 Kamar',
            title: 'Kos mahal banget bandung',
            image : require('../../assets/kost/kos-one.jpg')
        },
        {
            id : '2',
            city: 'Ada 3 Kamar',
            title: 'Kos mahal banget jakarta',
            image : require('../../assets/kost/kos-two.jpg')
        },
        {
            id : '3',
            city: 'Ada 5 Kamar',
            title: 'Kos mahal banget yogyakarta',
            image : require('../../assets/kost/kos-three.jpg')
        }]
    }

    showArrayItem = (item) => {
        alert(item);
    }

    render() {
    return (
        <View style={{margin:10}}>
            
            <View style={{flexDirection:'row', marginBottom:10}}>
                <View style={{flex:1}}>
                    <Text>Kebersihan</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Kenyamanan</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <View style={{flex:1}}>
                    <Text>Keamanam</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Harga</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginBottom:10}}>
                <View style={{flex:1}}>
                    <Text>Fasilitas Kamar</Text>
                    <Text>
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text>Fasilitas Umum</Text>
                    <Text >
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                        <Icon name="star" style={{color:'#ddd'}} size={15} />
                    </Text>
                </View>
            </View>
            <View style={{flex:1, paddingVertical:5}}>
                <View>
                    <Text style={{fontWeight: "bold", marginBottom: 10}}>Verifikasi</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5}}>
                    <Icon3 name='timer-sand-full' style={{marginRight: 5}}/>
                    <Text>Kost belum dikunjungi</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 5}}>
                    <Icon2 name='check-circle' color='green' style={{marginRight: 5}}/>
                    <Text>Telepon sudah terverifikasi</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginVertical:10,
                paddingHorizontal:10, 
                paddingVertical:10, 
                borderWidth:0.3,
                borderColor:'#ddd',
                backgroundColor: '#ECEFF1'
                }}>
                <View style={{flex:1, flexDirection: "row"}}>
                    <Text>Ada data yang kurang tepat atau kendala lain dengan kost ?</Text>
                </View>
                <View style={{flex:0.5, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{color: 'red', fontWeight: "bold"}}>Laporkan</Text>
                </View>
            </View>
            <ScrollView style={{marginTop: 15}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
            >
            {
                this.cities.map((item, key) => (
                    <View key={key}>
                    {/* <TouchableOpacity onPress={this.showArrayItem.bind(this, item.id)}> */}
                    <TouchableOpacity onPress={() => {this.props.navigate('Search')}}>
                        <Image style={styles.imagepop} source={item.image} />
                    </TouchableOpacity>
                    <Text style={styles.textmini}> {item.city}</Text>
                    <Text style={styles.texttitle}> {item.title}</Text>
                    </View>
                ))
            }
            <View></View>
        </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
    textmini: {
        // position: 'absolute',
        fontSize: 15, 
        color: "#FFF", 
        alignItems: "center",
        fontWeight: "bold",
        width: 165,
        height: 20,
        // marginLeft: -10,
        marginTop: -50,
        backgroundColor: 'orange'
    },
    texttitle: {
        // position: 'absolute',
        fontSize: 15, 
        color: "grey", 
        alignItems: "center",
        width: 165,
        height: 20,
        // marginLeft: -10,
        
        backgroundColor: '#ECEFF1'
    },
    imagepop: {
        width: 165, 
        height: 165, 
        borderColor: 'grey',
        borderWidth: 0.2, 
        marginRight: 10,
        justifyContent: "space-between", 
        marginBottom: 30
    }
})