import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'

export default class Barner extends Component {

    constructor(){
        super();
        this.promo = [{
            id : '1',
            price: 'Rp. 1.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-one.jpg')
        },
        {
            id : '2',
            price: 'Rp. 2.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-two.jpg')
        }
        ,
        {
            id : '3',
            price: 'Rp. 3.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-three.jpg')
        },
        {
            id : '4',
            price: 'Rp. 4.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-four.jpg')
        },
        {
            id : '5',
            price: 'Rp. 5.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-five.jpg')
        },
        {
            id : '6',
            price: 'Rp. 5.500.000',
            desc: 'Kost mamirooms isma tegalrejo yogyakarta',
            image : require('../../assets/kost/kos-six.jpg')
        }]
    }

    showArrayItem = (item) => {
        alert(item);
    }

    onShare = async () => {
        try {
            const result = await Share.share({
            message:
                'React Native | A framework for building native apps using React',
            });
    
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    render() {
        return (
        <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={10}
                pagingEnabled
            >
                {
                    this.promo.map((item, key) => (
                        <View key={key}>
                            <Image onPress={this.showArrayItem.bind(this, item.id)} style={styles.bigpro} source={item.image} />
                        </View>
                    ))
                }
            </ScrollView>
            <View style={{
                flexDirection: 'row', 
                backgroundColor:'#000',
                padding:5
                }}>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity>
                    <Icon2 name="image" size={20} color='white'/>
                    <Text style={{color:'#fff'}}>Foto</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity>
                    <Icon2 name="map" size={20} color='white'/>
                    <Text style={{color:'#fff'}}>Peta</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity>
                    <Icon3 name="rotate-orbit" size={20} color='white'/>
                    <Text style={{color:'#fff'}}>360</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        
    )
}
}

const styles = StyleSheet.create({
    bigpro: {
        width: 360,
        height: 300,
    }
})