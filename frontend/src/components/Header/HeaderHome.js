import React, { Component } from 'react'
import { StyleSheet, Image, StatusBar } from 'react-native'
import { Header, Left, Button, Body, Right } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Ionicons'

export default class HeaderHome extends Component {

    componentWillMount(){
        <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
    }
    
    render() {
        return (
            <Header style={styles.headbar} androidStatusBarColor='#F7A207'>
                
                <Left style={{flex: 1}}>
                <Button transparent onPress={()=>this.props.openDrawer()}>
                    <Icon2 name='align-left' color='white' size={18} />
                </Button>
                </Left>
                <Body style={styles.body}>
                    <Image style={styles.logo} source={require('../../assets/pagoda.png')} />
                </Body>
                <Right style={{flex: 1}}>
                    <Button transparent onPress={() => this.props.navigate('Chat')}>
                        <Icon3 name='ios-chatboxes' color='white' size={18}/>
                    </Button>
                </Right>
            </Header> 
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row'
    },
    logo: {
        width: 100, 
        height: 50,
        resizeMode: 'contain'
    },
    headbar: {
        backgroundColor: '#F7A207', 
        borderBottomWidth: 0, 
        shadowOffset: {height: 0, width: 0}, 
        shadowOpacity: 0, 
        elevation: 0,
        height: 60
    }
})