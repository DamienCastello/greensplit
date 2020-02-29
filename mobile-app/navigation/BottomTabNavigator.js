import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import Select from '../screens/public/select';
import Login from '../screens/public/login';
import Signup from '../screens/public/signup';
import About from '../screens/public/about';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Select';

const ImageHeader = props => (
  <View style={{ backgroundColor: '#4a8a20' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: 'https://www.transparenttextures.com/patterns/green-dust-and-scratches.png' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
);

export default function BottomTabNavigator({ navigation, route }) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({ 
      headerTitle: getHeaderTitle(route), 
      headerStyle: { backgroundColor: 'transparent' },
      headerStyle: getHeaderStyle(route), 
      //header: (props) => <ImageHeader {...props} /> });
    })

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Select"
                component={Select}
                options={{
                    title: 'Select Screen',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
                }}
            />
            <BottomTab.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login Screen',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <BottomTab.Screen
                name="Signup"
                component={Signup}
                options={{
                    title: 'Signup Screen',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
            <BottomTab.Screen
                name="About"
                component={About}
                options={{
                    title: 'About Screen',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Select':
            return 'Here is select screen';
        case 'Login':
            return 'Here is login screen';
        case 'Signup':
            return 'Here is signup screen';
        case 'About':
            return 'Here is about screen';
    }
}

function getHeaderStyle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
      case 'Select':
          return {backgroundColor: '#4a8a20'};
      case 'Login':
          return {backgroundColor: '#4a8a20'};
      case 'Signup':
          return {backgroundColor: '#4a8a20'};
      case 'About':
          return {backgroundColor: '#4a8a20'};
  }
}