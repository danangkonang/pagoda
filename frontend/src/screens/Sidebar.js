import React, { Component } from 'react';
import { Image, StatusBar } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Right, Body, Text } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
        <Header style={{backgroundColor: '#F7A207', height: 60}}>
          <Body style={{flex: 1, flexDirection: 'row'}}>
            <Image style={{width: 100, height: 50, resizeMode: 'contain'}} source={require('../assets/pagoda.png')} />
          </Body>
        </Header> 
        <Content>
          <Button transparent style={{marginTop: 10}} onPress={() => this.props.navigate('SignIn')}>
              <Text style={{color: '#F7A207'}} uppercase={false}>Daftar / Masuk</Text>
          </Button>
          <Button transparent>
              <Text style={{color: '#F7A207'}} uppercase={false}>Pengaturan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}