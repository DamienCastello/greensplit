import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import SelectToSignStack from './selectToSignStack';
import SelectToLogStack from './selectToLogStack';


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  'Home': {
    screen: HomeStack,
  },
  'About': {
    screen: AboutStack,
  },
  'Sign Up': {
    screen: SelectToSignStack,
  },
  'Log In': {
    screen: SelectToLogStack,
  }
});

export default createAppContainer(RootDrawerNavigator);