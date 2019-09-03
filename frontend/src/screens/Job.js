import React, {Component} from 'react'
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Input, Text, Icon, Button } from 'native-base'

import Promo from '../components/Promo/Promo'
import Popular from '../components/Popular/Popular'

export default class House extends Component {

    render () {
        return (
            <Container>
                <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
                <Content style={{padding: 15}}>
                    <Text style={{fontSize: 18}}>Hai, Sugeng</Text>
                    <Text style={styles.topsearch}>Mau cari Pekerjaan dimana?</Text>
                    <TouchableOpacity style={styles.searchbar} onPress={() => this.props.navigate('Search')}>
                        <Icon name='search' style={styles.iconsearch} />
                        <Input disabled={true}
                        style={styles.searchinput} placeholder="Masukkan alamat atau nama tempat" placeholderTextColor="#C9C9C9"
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, fontWeight: "bold", marginTop: 15}}>Promo</Text>

                    <Promo />
                    
                    <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between", marginTop: 20}}>
                        <Text style={{fontSize: 16, alignSelf: "center"}}>Tertarik mengiklankan kosmu?</Text>
                        <Button style={{width: 105, height: 30, justifyContent: "center", borderRadius: 3, backgroundColor: '#F98F0B'}} onPress={() => this.props.navigate('Ads')}>
                            <Text style={{fontSize: 14}} uppercase={false}>Pasang iklan</Text>
                        </Button>
                    </View>
                    
                    <Text style={{fontSize: 18, marginTop: 20, fontWeight: "bold"}}>Kota Populer</Text>
                    <Popular navigate={this.props.navigate}/>
                </Content>
            </Container>
        )
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
        color: '#C9C9C9', 
        marginTop: 11
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