import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Logout from '../screens/connected/logout';

const screens = {
  Logout: {
    screen: Logout,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Greensplit' navigation={navigation} />
      }
    },
  },
}

const LogoutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default LogoutStack;