import React from 'react';
import UserForm from '../components/userLogInForm';
import CompanyForm from '../components/companyLogInForm';
import RunerForm from '../components/runerLogInForm';


function LoginForm({navigation}) {

  if (navigation.getParam('role') === 'Consumer') {
    return <UserForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Company') {
    return <CompanyForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Deliverer') {
    return <RunerForm navigation={navigation} />
  }

}



export default LoginForm;
