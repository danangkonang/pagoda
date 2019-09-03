import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Tabs, Tab } from 'native-base'

import House from '../../screens/House'
import Apartment from '../../screens/Apartment'
import Service from '../../screens/Service'
import Job from '../../screens/Job'

export default class Taabs extends Component {
    render() {
        return (
            <Tabs tabContainerStyle={{ height: 35 }} locked={true}>
                <Tab 
                    heading="Kost"
                    tabStyle={styles.tabstyle}
                    activeTabStyle={styles.tabstyle}
                    textStyle={styles.textstyle}
                    activeTextStyle={styles.activestyle}
                >
                <House navigate={this.props.navigate}/>
                </Tab>
                <Tab heading="Apartemen"
                    tabStyle={styles.tabstyle}
                    activeTabStyle={styles.tabstyle}
                    textStyle={styles.textstyle}
                    activeTextStyle={styles.activestyle}
                >
                <Apartment navigate={this.props.navigate}/>
                </Tab>
                <Tab heading="Barang & Jasa"
                    tabStyle={styles.tabstyle}
                    activeTabStyle={styles.tabstyle}
                    textStyle={styles.textstyle}
                    activeTextStyle={styles.activestyle}
                >
                <Service navigate={this.props.navigate}/>
                </Tab>
                <Tab heading="Lowongan Kerja"
                    tabStyle={styles.tabstyle}
                    activeTabStyle={styles.tabstyle}
                    textStyle={styles.textstyle}
                    activeTextStyle={styles.activestyle}
                >
                <Job navigate={this.props.navigate}/>
                </Tab>
            </Tabs>   
        )
    }
}

const styles = StyleSheet.create({
    tabstyle: {
        backgroundColor: '#F7A207'
    },
    activestyle:{
        color: '#FFF', 
        fontSize: 12
    },
    textstyle: {
        // color: '#6ECF92', 
        fontSize: 12
    }
})