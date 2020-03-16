import React from 'react';
import UserForm from '../components/userForm';
import CompanyForm from '../components/companyForm';
import RunerForm from '../components/runerForm';


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
