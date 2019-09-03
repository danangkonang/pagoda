import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Drawer, Container } from 'native-base'

import SideBar from './Sidebar'
import Tabs from '../components/Tabs/Tabs'
import HeaderHome from '../components/Header/HeaderHome'

export default class Home extends Component {

  constructor(props){
    super(props)
  }
  closeDrawer() {
    this._drawer._root.close()
  }
  openDrawer() {
    this._drawer._root.open()
  }

  componentWillMount(){
    <StatusBar backgroundColor="#F7A207" barStyle="light-content" />
  }
  
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigate={this.props.navigation.navigate}/>}
        onClose={() => this.closeDrawer()} >
        <Container>
          <HeaderHome openDrawer={this.openDrawer.bind(this)} navigate={this.props.navigation.navigate}/>
          <Tabs navigate={this.props.navigation.navigate}/>    
        </Container>
      </Drawer>
    );
  }
}

