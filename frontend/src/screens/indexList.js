import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '../_redux/store'
import Lists from './List'

const index = () => {
  return (
    <Provider store={store}>
      <Lists />
    </Provider>
  )
}

export default index