import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '../_redux/store'
import AppNavigator from '../../App'

const index = () => {
  return (
    <Provider store={store}>
      <AppNavigator navigate={this.props.navigation.navigate}/>
    </Provider>
  )
}

export default index