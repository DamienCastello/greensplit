import React from 'react';
import UserForm from '../components/userLogInForm';
import CompanyForm from '../components/companyLogInForm';
import RunerForm from '../components/runerLogInForm';


function SignupForm({navigation}) {

  if (navigation.getParam('role') === 'Consumer') {
    return <UserForm />
  } else if (navigation.getParam('role') === 'Company') {
    return <CompanyForm />
  } else if (navigation.getParam('role') === 'Deliverer') {
    return <RunerForm />
  }

}



export default SignupForm;
