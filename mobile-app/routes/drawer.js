import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import SelectStack from './selectStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  'Home': {
    screen: HomeStack,
  },
  'About': {
    screen: AboutStack,
  },
  'Sign Up': {
    screen: SelectStack,
  },/*
  'Log In': {
    screen: SelectStack,
  },*/
});

export default createAppContainer(RootDrawerNavigator);