import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import SignupStack from './signupStack';
import LoginStack from './loginStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Signup: {
    screen: SignupStack,
  },
  Login: {
    screen: LoginStack,
  },
});

export default createAppContainer(RootDrawerNavigator);