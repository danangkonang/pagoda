import React, { Component } from 'react'
import { DatePickerAndroid, Image, Text, View, Picker, StatusBar } from 'react-native'
import { Container, Content, CheckBox, ListItem, Header, Left, Button, Body, Right, Row} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DropdownMenu from 'react-native-dropdown-menu'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            date: new Date(),
            dateText: 'Pick a date',
            checkterms: true
        }
        this.showDatePicker.bind(this)
    }

    toggleterms() {
        this.setState({
          checkterms: !this.state.checkterms
        });
    }

    showDatePicker = async (options) => {
        try {
          const {action, year, month, day} = await DatePickerAndroid.open(options);
          if (action !== DatePickerAndroid.dismissedAction) {
            let date = new Date(year, month, day);
            let newState = {};
            newState['date'] = date;
            newState['dateText'] = date.toLocaleDateString("en-US");
            this.setState(newState);
          }
        } catch ({code, message}) {
          console.warn(`error `, code, message);
        }
    }
    
    render() {
    var data = [["1 Bulan", "2 Bulan", "3 Bulan", "4 Bulan", "5 Bulan", "6 Bulan", "7 Bulan", "8 Bulan", "9 Bulan", "10 Bulan", "12 Bulan"]];
    return (
      <Container>
        <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
        <Header style={{backgroundColor: '#F7A207'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.navigate('Detail')}>
              <Icon name='arrow-left' color='white' size={18} />
            </Button>
          </Left>
          <Body style={{flex: 1, alignItems: "center"}}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Booking</Text>
          </Body>
          <Right style={{flex: 1}}/>
        </Header>
        <View style={{flexDirection: "row", justifyContent: "space-between", padding: 10}}>
            <View>
                <Text style={{fontSize: 10}}>Tanggal masuk</Text>
                <Button transparent onPress={() => this.showDatePicker({date: this.state.date})}>
                    <Text style={{ fontWeight: "bold"}} >{this.state.dateText}</Text>
                </Button>
            </View>
            <View>
                <Text style={{fontSize: 10}}>Durasi sewa</Text>
                <Picker selectedValue={this.state.month} mode={DropdownMenu}
                style={{ fontWeight: "bold", height: 40, width: 110 }} 
                onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue}) }
                >
                    <Picker.Item label="1 Bulan" value="1 Bulan" /> 
                    <Picker.Item label="2 Bulan" value="2 Bulan" />
                    <Picker.Item label="3 Bulan" value="3 Bulan" /> 
                    <Picker.Item label="4 Bulan" value="4 Bulan" /> 
                    <Picker.Item label="5 Bulan" value="5 Bulan" /> 
                    <Picker.Item label="6 Bulan" value="6 Bulan" /> 
                    <Picker.Item label="7 Bulan" value="7 Bulan" /> 
                    <Picker.Item label="8 Bulan" value="8 Bulan" /> 
                    <Picker.Item label="9 Bulan" value="9 Bulan" /> 
                    <Picker.Item label="10 Bulan" value="10 Bulan" />
                    <Picker.Item label="11 Bulan" value="11 Bulan" /> 
                    <Picker.Item label="12 Bulan" value="12 Bulan" /> 
                </Picker>
            </View>
            <View>
                <Text style={{fontSize: 10}}>Tanggal keluar</Text>
                <Button transparent>
                    <Text style={{ fontWeight: "bold"}}>{this.state.dateText}</Text>
                </Button>
            </View>
        </View>
        <View style={{padding: 2}}></View>
        <View style={{padding: 10, flexDirection: "row"}}>
            <Image style={{width: 100, height: 100}} source={require('../assets/kost/kos-one.jpg')}></Image>
            <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 15}}>Kost mamikos mantap di yogyakarta
                {"\n"}{"\n"}
                <Icon name="twitter" style={{fontSize : 20}}>  </Icon>
                <Icon name="facebook" style={{fontSize : 20}}>  </Icon>
                <Icon name="instagram" style={{fontSize : 20}}>  </Icon>
                <Icon name="youtube" style={{fontSize : 20}}>  </Icon>
                {"\n"}{"\n"}
                Rp. 2.700.000
                </Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", padding: 10}}>
            <View style={{width: 150}}><Text style={{fontWeight: "bold", marginBottom: 15}}>Data Penghuni</Text></View>
            <View style={{width: 150}}><Text style={{textAlign:"right", fontWeight: "bold", color: 'orange'}}>Ubah</Text></View>
            <View style={{width: 150}}><Text style={{marginBottom: 10}}>Nama Lengkap</Text></View>
            <View style={{width: 150}}><Text style={{textAlign:"right", fontWeight: "bold"}}>Sugeng</Text></View>
            <View style={{width: 150}}><Text style={{marginBottom: 10}}>Jenis Kelamin</Text></View>
            <View style={{width: 150}}><Text style={{textAlign:"right", fontWeight: "bold"}}>Laki-laki</Text></View>
            <View style={{width: 150}}><Text style={{marginBottom: 10}}>No Handphone</Text></View>
            <View style={{width: 150}}><Text style={{textAlign:"right", fontWeight: "bold"}}>087871946868</Text></View>
            <View style={{width: 150}}><Text style={{marginBottom: 10}}>Pekerjaan</Text></View>
            <View style={{width: 150}}><Text style={{textAlign:"right", fontWeight: "bold"}}>Programmer</Text></View>
        </View>
        <View style={{padding: 10, marginBottom: -20}}>
            <Text style={{fontWeight: "bold", marginBottom: 30}}>Keterangan Biaya Lain</Text>
            <ListItem style={{borderBottomColor: 'white'}} onPress={() => this.toggleterms()}>
                <CheckBox color="#F7A207" style={{marginLeft: -28}} checked={this.state.checkterms}/>
                <Body style={{padding: 10}}>
                    <Text>Saya menyetujui syarat dan ketentuan dan memastikan data di atas benar.</Text>
                </Body>
            </ListItem>
        </View>
        <View style={{padding: 10}}>
            <Button style={{backgroundColor: "#F7A207", justifyContent: "center"}} onPress={() => this.props.navigation.navigate('ListBooking')}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Booking</Text>
            </Button>
        </View>
      </Container>
    );
  }
}

