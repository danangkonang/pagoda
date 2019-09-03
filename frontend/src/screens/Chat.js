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
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='arrow-left' color='white' size={18} />
            </Button>
          </Left>
          <Body style={{flex: 1, alignItems: "center"}}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Chat</Text>
          </Body>
          <Right style={{flex: 1}}/>
        </Header>
        <View style={{padding: 15}}>
        <View style={{marginTop: 5, padding: 10, flexDirection: "row", backgroundColor: 'orange', borderRadius: 10}}>
            <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../assets/user.png')}></Image>
            <View style={{paddingLeft: 20, justifyContent: "center"}}>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>Sugeng Agung Suganda</Text>
                <Text style={{fontSize: 15}}>Jualan kangkung gak gan?</Text>
            </View>
        </View>
        <View style={{marginTop: 10, padding: 10, flexDirection: "row", backgroundColor: 'orange', borderRadius: 10}}>
            <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('../assets/user.png')}></Image>
            <View style={{paddingLeft: 20,  justifyContent: "center"}}>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>Danang</Text>
                <Text style={{fontSize: 15}}>Mau beli onderdil kereta, ada?</Text>
            </View>
        </View>
        </View>
      </Container>
    );
  }
}

