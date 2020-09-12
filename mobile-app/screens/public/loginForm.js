import React from 'react';
import UserForm from '../../components/userLogInForm';
import CompanyForm from '../../components/companyLogInForm';
import RunerForm from '../../components/runerLogInForm';


function LoginForm({navigation}) {
  console.log("check role in LoginForm : ", navigation.getParam('role'));

  if (navigation.getParam('role') === 'Consumer') {
    return <UserForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Company') {
    return <CompanyForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Deliverer') {
    return <RunerForm navigation={navigation} />
  }

}



export default LoginForm;
