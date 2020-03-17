import React from 'react';
import UserForm from '../components/userSignUpForm';
import CompanyForm from '../components/companySignUpForm';
import RunerForm from '../components/runerSignUpForm';


function SignupForm({navigation}) {

  if (navigation.getParam('role') === 'Consumer') {
    return <UserForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Company') {
    return <CompanyForm navigation={navigation} />
  } else if (navigation.getParam('role') === 'Deliverer') {
    return <RunerForm navigation={navigation} />
  }

}



export default SignupForm;
