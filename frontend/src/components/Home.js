import React, { Component } from 'react'
import {
    View,
    ScrollView, 
    StyleSheet, 
    Image,
    StatusBar
} from 'react-native';
import { 
    Header, 
    Left, 
    Button, 
    Body, 
    Right
} from 'native-base'
import Barner from './detail/Barner'
import Icon from 'react-native-vector-icons/FontAwesome5'
import InfoKos from '../components/detail/InfoKos'
import BoxBooking from './detail/boxBooking'
import ServiceKos from './detail/ServiceKos'

export default class Home extends Component {
render() {
    return (
        <View style={{flex:1, flexDirection: 'column'}}>
            <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
            <Header style={styles.headbar}>
                <Left style={{flex: 1}}>
                    <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon name='arrow-left' color='white' size={18}/>
                    </Button>
                </Left>
                <Right style={{flex: 1}}>
                    <Button transparent>
                        <Icon name='heart' color='white' size={18}/>
                    </Button>
                    <Button transparent>
                        <Icon name='share-alt' color='white' size={18}/>
                    </Button>
                </Right>
            </Header> 
            <ScrollView >
                <Barner/>
                <InfoKos/>
                <ServiceKos navigate={this.props.navigation.navigate}/>
            </ScrollView>
                <BoxBooking navigate={this.props.navigation.navigate}/>
        </View>
    )
}
}

const styles = StyleSheet.create({
    headbody: {
        flex: 1,
        flexDirection: 'row'
    },
    logo :{
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
        height: 50
    }
})