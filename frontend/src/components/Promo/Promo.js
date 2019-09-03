import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'

export default class Promo extends Component {

    constructor(){
        super();
        this.promo = [{
            id : '1',
            price: 'Rp. 1.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/promo/promo-one.jpg')
        },
        {
            id : '2',
            price: 'Rp. 2.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/promo/promo-two.jpg')
        }
        ,
        {
            id : '3',
            price: 'Rp. 3.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/promo/promo-three.jpg')
        },
        {
            id : '4',
            price: 'Rp. 4.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/promo/promo-four.jpg')
        },
        {
            id : '5',
            price: 'Rp. 5.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/promo/promo-five.jpg')
        }]
    }

    showArrayItem = (item) => {
        alert(item);
    }

    render() {
        return (
            <ScrollView 
                style={{marginTop: 10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
            >
                {
                    this.promo.map((item, key) => (
                        <TouchableOpacity key={key}>
                            <View>
                                <Image onPress={this.showArrayItem.bind(this, item.id)} style={styles.bigpro} source={item.image} />
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    bigpro: {
        width: 330, 
        height: 150, 
        resizeMode: "contain", 
        borderColor: 'grey', 
        borderWidth: 0.1
    }
})