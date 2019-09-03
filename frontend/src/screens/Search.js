import React, { Component } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Container, Header, Item, Input, Button, Text, Tab, Tabs } from 'native-base'
import Icon from 'react-native-vector-icons/Feather'

import List from './indexList'
import Map from './Map'

export default class Search extends Component {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
        <Header searchBar rounded style={{backgroundColor: '#FFF', height: 60}} hasTabs>
          <Item style={styles.searchbar}>
            <Icon name="arrow-left" style={styles.iconsearch} onPress={() => this.props.navigation.navigate('Home')}/>
            <Input placeholder="Pencarian" style={styles.searchinput} placeholderTextColor="#C9C9C9" />
          </Item>
        </Header>
        <Tabs tabContainerStyle={{ height: 35 }} locked={true} tabBarUnderlineStyle={{backgroundColor: '#F7A207'}}>
        <Tab 
            heading="Lihat peta"
            tabStyle={{backgroundColor: '#FFF'}}
            activeTabStyle={{backgroundColor: '#FFF'}}
            textStyle={{color: 'grey', fontSize: 12}}
            activeTextStyle={{color: '#F7A207', fontSize: 12}}
            >
                <Map/>
            </Tab>
            <Tab 
            heading="Lihat daftar"
            tabStyle={{backgroundColor: '#FFF'}}
            activeTabStyle={{backgroundColor: '#FFF'}}
            textStyle={{color: 'grey', fontSize: 12}}
            activeTextStyle={{color: '#F7A207', fontSize: 12}}
            >
                <List navigate={this.props.navigation.navigate}/>
            </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  topsearch: {
      fontSize: 20, 
      paddingBottom: 10
  },
  searchbar: {
      backgroundColor: '#E7E7E7', 
      flexDirection: 'row', 
      alignItems: 'stretch', 
      paddingLeft: 15, 
      borderRadius: 3 
  },
  iconsearch: {
      fontSize: 18, 
      color: '#F7A207', 
      marginTop: 10
  },
  searchinput: {
      backgroundColor: '#E7E7E7', 
      color: '#C9C9C9', 
      paddingLeft: 10, 
      height: 40, 
      fontSize: 14,
      borderBottomRightRadius: 3,
      borderTopRightRadius: 3
  }
})