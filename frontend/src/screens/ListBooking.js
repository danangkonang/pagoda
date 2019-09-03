import React, { Component } from 'react'
import { DatePickerAndroid, Image, Text, View, Picker, StatusBar } from 'react-native'
import { Container, Content, CheckBox, ListItem, Header, Left, Button, Body, Right, Row} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DropdownMenu from 'react-native-dropdown-menu'

export default class Home extends Component {
    render() {
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
        <View style={{padding: 10, flexDirection: "row"}}>
            <Image style={{width: 120, height: 120}} source={require('../assets/kost/kos-one.jpg')}></Image>
            <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 15, marginBottom: 10}}>Kost mamikos mantap di yogyakarta</Text>
                <View style={{flexDirection: "row", marginBottom: 10}}>
                    <Icon name="twitter" style={{fontSize : 20}}>  </Icon>
                    <Icon name="facebook" style={{fontSize : 20}}>  </Icon>
                    <Icon name="instagram" style={{fontSize : 20}}>  </Icon>
                    <Icon name="youtube" style={{fontSize : 20}}>  </Icon>
                </View>
                <Text style={{fontSize: 15, marginBottom: 10}}>Rp. 1.500.000</Text>
                <Button style={{backgroundColor: 'white', borderRadius: 3, borderColor: 'green', borderWidth: 1, justifyContent: "center", width: 150, height: 30}}>
                    <Text>Menunggu konfirmasi</Text>
                </Button>
            </View>
        </View>
      </Container>
    );
  }
}

