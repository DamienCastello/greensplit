import { createDrawerNavigator } from 'react-navigation-drawer';

// stacks
import HomeStack from '../stacks/homeStack';
import AboutStack from '../stacks/aboutStack';
import LogoutStack from '../stacks/logoutStack';


// drawer navigation options
export default createDrawerNavigator({
  'Home': {
    screen: HomeStack,
  },
  'About': {
    screen: AboutStack,
  },
  'Log Out': {
    screen: LogoutStack,
  }
});