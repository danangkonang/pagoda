import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"

import Home from './src/screens/Home'
import Ads from './src/screens/Ads'
import Apartment from './src/screens/Apartment'
import Service from './src/screens/Service'
import Job from './src/screens/Job'
import Search from './src/screens/Search'
import BookingDetail from './src/screens/BookingDetail'
import Chat from './src/screens/Chat'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import Detail from './src/components/Home'
import House from './src/screens/House'
import List from './src/screens/List'
import ListBooking from './src/screens/ListBooking'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  House: {
    screen: House,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },
  Apartment: {
    screen: Apartment,
    navigationOptions: {
      header: null
    }
  },
  Service: {
    screen: Service,
    navigationOptions: {
      header: null
    }
  },
  Job: {
    screen: Job,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  },
  BookingDetail: {
    screen: BookingDetail,
    navigationOptions: {
      header: null
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
        header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Ads: {
    screen: Ads,
    navigationOptions: {
      header: null
    }
  },
  List: {
    screen: List,
    navigationOptions: {
      header: null
    }
  },  
  ListBooking: {
    screen: ListBooking,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);