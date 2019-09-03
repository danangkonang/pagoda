import React, {Component} from 'react'
import { View, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Left, Button, Body, Title, Right, Tab, Tabs, Content, Text } from 'native-base'

import { connect } from 'react-redux'
import axios from 'axios'

import { getLists } from '../_actions/lists'

class Lists extends Component {
    
    constructor(){
        super();
        this.state ={ 
          isLoading: true,
          lists: []
        }
      }
  
      componentDidMount(){
        axios.get('http://api-kos-express.herokuapp.com/api/v1/rooms')
        .then(res => {
          const lists = res.data;
          this.props.dispatch(getLists(lists))
        })
      }

      
      
    render () {

        // if(this.state.isLoading){
        //   return(
        //     <View style={{flex: 1}}>
        //       <ActivityIndicator/>
        //     </View>
        //   )
        // }

        
        return (
            <Container>
                <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
                <Content>
                    {this.props.lists.data.map(item => (
                      <TouchableOpacity style={styles.styls} onPress={() => this.props.navigate('Detail')} key={item.id}>
                        <View>
                              <Image style={styles.imglist} source={{uri: 'http://api-kos-express.herokuapp.com/image/' + item.images}}/>
                                <View style={{flexDirection: "row"}}>
                                <Text style={{margin: 3, fontWeight: "bold", color: 'red'}}>Putri</Text>
                                <Text style={{margin: 3, fontWeight: "bold", color: 'green'}}>Tinggal 1 Kamar</Text>
                                <Text style={{margin: 3, fontWeight: "bold", color: 'blue'}}>{item.address}</Text>
                            </View>
                            <View>
                                <Text style={{margin: 3, fontWeight: "bold"}}>Rp. {item.price}</Text>
                                <Text style={{margin: 3}}>{item.name}</Text>
                            </View>
                            <Button style={{margin: 4, width: 105, height: 30, justifyContent: "center", borderRadius: 3, backgroundColor: '#F98F0B'}}>
                                <Text style={{fontSize: 13}} uppercase={false}>Bisa booking</Text>
                            </Button>
                        </View>
                      </TouchableOpacity>
                    ))}
                </Content>
            </Container>

            // <Container>
            //     <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
            //     <Content>
            //     <ScrollView
            //     horizontal={false}
            //     showsHorizontalScrollIndicator={false} 
            //     scrollEventThrottle={10} 
            //     pagingEnabled
            //     >
            //         {
            //             this.promo.map((item, key) => (
            //                 <TouchableOpacity style={styles.styls} key={key} onPress={() => this.props.navigate('Detail')}>
            //                 <View>
            //                     <Image onPress={this.showArrayItem.bind(this, item.id)} style={styles.imglist} source={item.image} />
            //                     <View style={{flexDirection: "row"}}>
            //                         <Text style={{margin: 3, fontWeight: "bold", color: 'red'}}>{item.sex}</Text>
            //                         <Text style={{margin: 3, fontWeight: "bold", color: 'green'}}>{item.status}</Text>
            //                         <Text style={{margin: 3, fontWeight: "bold", color: 'blue'}}>{item.location}</Text>
            //                     </View>
            //                     <View>
            //                         <Text style={{margin: 3, fontWeight: "bold"}}>{item.price}</Text>
            //                         <Text style={{margin: 3}}>{item.desc}</Text>
            //                     </View>
            //                     <Button style={{margin: 4, width: 105, height: 30, justifyContent: "center", borderRadius: 3, backgroundColor: '#F98F0B'}}>
            //                         <Text style={{fontSize: 13}} uppercase={false}>Bisa booking</Text>
            //                     </Button>
            //                 </View>
            //                 </TouchableOpacity>
            //             ))
            //         }
            //     </ScrollView>
            //     </Content>
            // </Container>
            
//         )
//     }

  // render() {
  //   return (
  //     <ScrollView style={{ flex: 1 }}>
  //       {this.props.lists.data.map(id => (
  //         <View key={id.id}>
  //         <Text>{id.name}</Text>
  //         </View>
  //       ))}
  //     </ScrollView>
  //   )
  // }
)}}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(Lists);


const styles = StyleSheet.create({
    imglist: {
        width: 325, 
        height: 200, 
        marginRight: 10,
        borderRadius: 3
    },
    styls: {
        margin: 17
    }
})