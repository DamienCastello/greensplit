import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import StartApp from '../screens/startApp';

const screens = {
  StartApp: {
    screen: StartApp,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Greensplit' navigation={navigation} />
      }
    },
  },
}

const StartAppStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default StartAppStack;