  import { createAppContainer, createSwitchNavigator } from "react-navigation";
  import { createStackNavigator } from 'react-navigation-stack';
  //import {  } from 'react-navigation';

  //import BottomTabNav from './bottomTabNavigator';
  import DrawerMenu from './DrawerNavigator';
  
  import AuthMenu from '../screens/public/authMenu';
  import SelectRole from '../screens/public/selectRole';
  import UserLogInForm from '../components/userLogInForm';
  import CompanyLogInForm from '../components/companyLogInForm';
  import DelivererLogInForm from '../components/runerLogInForm';
  import UserSignUpForm from '../components/userSignUpForm';
  import CompanySignUpForm from '../components/companySignUpForm';
  import DelivererSignUpForm from '../components/runerSignUpForm';
  import StartApp from '../screens/public/startApp';

  
  const AuthStack = createStackNavigator(
    {
      AuthMenu: { screen: AuthMenu, navigationOptions:({ navigation }) => {
        return {
          headerTitle: () => <Header title='Greensplit' navigation={navigation} />
        }
      }, },
      SelectRole: { screen: SelectRole },
      LoginUser: { screen: UserLogInForm },
      LoginCompany: { screen: CompanyLogInForm },
      LoginDeliverer: { screen: DelivererLogInForm },
      SignUpUser: { screen: UserSignUpForm },
      SignUpCompany: { screen: CompanySignUpForm },
      SignUpDeliverer: { screen: DelivererSignUpForm },
      //BottomTabNav: { screen: BottomTabNav },
    },
    {
      //initialRouteName: "BottomTabNav",
      initialRouteName: "AuthMenu",
      headerMode: 'none',
      navigationOptions: {
        // @ts-ignore
        headerVisible: false,
        header: null
      }
    }
  );
  
  export default createAppContainer(
    createSwitchNavigator(
      {
        //Tab: BottomTabNav,
        Auth: AuthStack,
        StartApp: StartApp,
        DrawerMenu: DrawerMenu
      },
      {
        // initialRouteName: "DrawerMenu" //TODO TEST BEFORE REMOVING
        initialRouteName: "StartApp"
      }
    )
  );