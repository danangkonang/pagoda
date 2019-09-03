import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, StatusBar, Image, TouchableOpacity, NativeModules, Dimensions } from 'react-native'
import ImagePicker from 'react-native-image-picker'

// import ImagePicker from 'react-native-image-crop-picker';
// import Video from 'react-native-video'

import axios from 'axios'
import { Button } from 'native-base'
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5'

// let ImagePicker = NativeModules.ImageCropPicker

export default class Ads extends Component {

    onRegionChange(region) {
        this.setState({ region });
     }

    constructor(props){
        super(props)
        this.state={
            latitude: '',
            longitude: '',
            
            name:'',
            address:'',
            userId:'',
            management:'',
            phoneManagement:'',
            long: '',
            wide: '',
            price: '',

            filePath: {}
            // images: null,
            // image: null
        }
    }

    addiklan = () => {

        // const data= {
        //     latitude : this.state.latitude,
        //     longitude : this.state.longitude,
           
        //     name :this.state.name,
        //     address :this.state.address,
        //     userId : 1 ,
        //     management :this.state.management,
        //     phoneManagement :this.state.phoneManagement,
        //     long : this.state.long,
        //     wide : this.state.wide,
        //     price : this.state.price,

        //     filePath: this.state.filePath.uri
        //  }

        //  console.log(data)

        // if(this.state.latitude ===''){
        //     alert('isi latitude');
        // }else if(this.state.longitude === ''){
        //  alert('isi longitude');
        // } else if(this.state.name ===''){
        //     alert('isi nama kosnya');
        // }else if(this.state.address === ''){
        //  alert('isi alamatnya');
        // } else if(this.state.management ===''){
        //     alert('isi penjaga');
        // }else if(this.state.phoneManagement === ''){
        //  alert('isi nomor penjanga');
        // } else if(this.state.long ===''){
        //     alert('isi panjang ruangan');
        // }else if(this.state.wide === ''){
        //  alert('isi lebar ruangan');
        // } else if(this.state.price ===''){
        //  alert('isi harga');
        // } else {
            axios({
                method: 'post',
                url: "http://api-kos-express.herokuapp.com/input",
                data: {
                    'latitude': this.state.latitude,
                    'longitude': this.state.longitude,
                    
                    'name':this.state.name,
                    'address':this.state.address,
                    'userId':'1',
                    'management':this.state.management,
                    'phoneManagement':this.state.phoneManagement,
                    'long': this.state.long,
                    'wide': this.state.wide,
                    'price': this.state.price,

                    filePath: this.state.filePath.path

                    // 'latitude': '12345',
                    // 'longitude': '54321',
                    
                    // 'name': 'Kos murah jakarta',
                    // 'address': 'Jakarta Barat',
                    // 'userId': 1,
                    // 'management': 'Sugeng',
                    // 'phoneManagement': '08787',
                    // 'long': 4,
                    // 'wide': 5,
                    // 'price': '500000',

                    // 'filePath': 'image.jpg'
                }
            })
            .then(res =>{
                console.log(res.data)
            })
        // this.props.navigate('SignIn')
        // alert('Registrasi Berhasil')
        }

    chooseFile = () => {
        const options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
     
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
              filePath: source,
            });
          }
        });
      };

    render() {
        return (
            <ScrollView>
                <View>
                    <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
                    <View style={styles.header}>
                        <Icon name='bars' color='white' size={18} />
                        <Text style={{fontWeight: "bold", color:'#fff'}}>Tambah Data Iklan</Text>
                        <Icon name='comment-alt' color='white' size={18} onPress={() => {this.props.navigation.navigate('Chat')}}/>
                    </View>

                <View style={{padding: 10}}>
                <View style={styles.input}>
                    <View>
                        <Text>Nama Kost</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Masukkan nama kost disini...'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(name)=> this.setState({name})}
                            value={this.state.name}
                        />
                    </View>
                    <View>
                        <Text>Alamat Kost</Text>
                        <TextInput
                            placeholder='Masukkan nama jalan, kecamatan, kelurahan, dll...'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(address)=> this.setState({address})}
                            value={this.state.address}
                        />
                    </View>
                    
                    <View>
                        <Text>Harga</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Harga Kost'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(price)=> this.setState({price})}
                            value={this.state.price}
                        />
                    </View>

                    <View>
                        <Text>Panjang</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Luas ruangan'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(long)=> this.setState({long})}
                            value={this.state.long}
                        />
                    </View>
                    <View>
                        <Text>Lebar</Text>
                        <TextInput
                            placeholder='Luas ruangan'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(wide)=> this.setState({wide})}
                            value={this.state.wide}
                        />
                    </View>

                    <View style={styles.containerMap}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: -6.301608,
                                longitude: 106.735095,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                            <Marker
                                draggable
                                coordinate={{
                                latitude: -6.301608,
                                longitude: 106.735095,
                                }}
                                // onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                                onDragEnd={
                                (e) => {
                                    const latitude = JSON.stringify(e.nativeEvent.coordinate.latitude)
                                    const longitude = JSON.stringify(e.nativeEvent.coordinate.longitude)

                                    //   alert(longitude)
                                    this.setState({latitude})
                                    this.setState({longitude})
                                }
                                }
                                title={'Kos'}
                                description={'koskosan murah'}
                            />
                        </MapView>
                    </View>
                    
                    <View style={styles.kordinat}>

                    <View style={styles.kordinatTitik}>
                        <TextInput
                            placeholder='1312344'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            value={this.state.longitude}
                        />
                    </View>
                    <View style={styles.kordinatTitik}>
                        <TextInput
                            placeholder='634577'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            value={this.state.latitude}
                        />
                    </View>

                    </View>

                    <View>
                        <Text>Pemilik Kost</Text>
                        <TextInput
                            placeholder='Masukkan nama pemilik kost'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(management)=> this.setState({management})}
                            value={this.state.management}
                        />
                    </View>
                    <View>
                        <Text>Nomor handphone Pemilik Kost</Text>
                        <TextInput
                            placeholder='Masukkan no.hp pemilik kost'
                            underlineColorAndroid='rgba(0,0,0,1)'
                            placeholderTextColor='#D5DBDB'
                            onChangeText={(phoneManagement)=> this.setState({phoneManagement})}
                            value={this.state.phoneManagement}
                        />
                    </View>

                    <View>
                        {/* <Image 
                        source={{ uri: this.state.filePath.path}} /> */}
                        {/* <Image
                            source={{
                            uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                            }}
                            style={{ width: 100, height: 100 }}
                        /> */}
                        <Image
                            source={{ uri: this.state.filePath.uri }}
                            style={{ width: 250, height: 250 }}
                        />
                        {/* <Text style={{ alignItems: 'center' }}>
                            {this.state.filePath.path}
                        </Text> */}
                        <Button style={{backgroundColor: "#F98F0B", justifyContent: "center", marginBottom: 10}} onPress={this.chooseFile.bind(this)}>
                            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Choose File</Text>
                        </Button>
                    </View>
                                        
                    <Button style={{backgroundColor: "#F98F0B", justifyContent: "center"}} onPress={this.addiklan}>
                        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Simpan</Text>
                    </Button>
                </View>
                </View>
                
            </View> 
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:'#F4F6F6'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#F7A207',
        paddingHorizontal:10,
        paddingVertical:15
    },
    input:{
        paddingHorizontal:5,
        marginTop:5
    },
    kordinat:{
        flexDirection:'row',
    },
    kordinatTitik:{
        flex:1
    },
    inputText:{

    },
    containerMap:{
       margin: 10,
       height:200
     },
    map: {
     position:'absolute',
     top:0,
     left:0,
     right:0,
     bottom:0,
   },
})