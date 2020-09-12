import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import SelectToSign from '../screens/public/selectToSign';

const screens = {
  SelectToSign: {
    screen: SelectToSign,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Greensplit' navigation={navigation} />
      }
    },
  },
}

const SelectToSignStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default SelectToSignStack;