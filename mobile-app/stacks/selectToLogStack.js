import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import SelectToLog from '../screens/public/selectToLog';

const screens = {
  SelectToLog: {
    screen: SelectToLog,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Greensplit' navigation={navigation} />
      }
    },
  },
}

const SelectToLogStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default SelectToLogStack;