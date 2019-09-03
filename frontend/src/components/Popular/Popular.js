import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'

export default class Popular extends Component {

    constructor(){
        super();
        this.cities = [{
            id : '1',
            city: 'Jakarta',
            image : require('../../assets/cities/jakarta.jpg')
        },
        {
            id : '2',
            city: 'Bandung',
            image : require('../../assets/cities/bandung.jpg')
        },
        {
            id : '3',
            city: 'Yogyakarta',
            image : require('../../assets/cities/yogyakarta.jpg')
        },
        {
            id : '4',
            city: 'Surabaya',
            image : require('../../assets/cities/surabaya.jpg')
        },
        {
            id : '5',
            city: 'Aceh',
            image : require('../../assets/cities/aceh.jpg')
        }]
    }

    showArrayItem = (item) => {
        alert(item);
    }

    render() {
        return (
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
                        <Text style={styles.textmini}>{item.city}</Text>
                    </View>
                ))
            }
            <View></View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textmini: {
        position: 'absolute', 
        padding: 15, 
        fontSize: 14, 
        marginTop: 110, 
        color: "#FFF", 
        alignSelf: "flex-start"
    },
    imagepop: {
        width: 104, 
        height: 150, 
        resizeMode: "contain", 
        borderColor: 'grey',
        borderWidth: 0.2, 
        marginRight: 8,
        justifyContent: "space-between", 
        marginBottom: 30
    }
})