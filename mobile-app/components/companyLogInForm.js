import React from 'react';
import { StyleSheet, Button, TextInput, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { loginCompany } from '../store/actions/auth';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';


const reviewSchema = yup.object({
  email: yup.string()
    .required(),
  password: yup.string()
    .required()
    .min(6, 'must be upper than 6 characters')
    .max(12, 'must be lower than 12 characters'),
});

function CompanyForm(props) {

  submit = async (company) => {
    const response = await props.loginCompany(company);
    if (response.status === 'error') {
      Toast.show({
        text: 'Erreur de connexion',
        buttonText: 'Ok'
      })
    } else if (response.status === 'success') {
      props.navigation.navigate('Home')
    }
  }

  return (

    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.authStackMargin}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => { 
            let company = {
              email: values.email,
              password: values.password,
            }
            actions.resetForm();
            // have to submit from store here
            submit(company);
          }}
        >
          {props => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='green@example.com'
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
              />
              {/* only if the left value is a valid string, will the right value be displayed */}
              <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='********'
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
              />
              <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>

              <FlatButton onPress={props.handleSubmit} text='submit' />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>

  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  loginCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm)
