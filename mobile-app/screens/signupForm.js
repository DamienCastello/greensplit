import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { signup } from '../store/actions/auth';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';
import AvatarUpload from '../shared/avatar';

const reviewSchema = yup.object({
  email: yup.string()
    .required(),
  password: yup.string()
    .required()
    .min(6, 'must be upper than 6 characters')
    .max(12, 'must be lower than 12 characters'),
  firstname: yup.string()
    .required()
    .min(4, 'must be upper than 4 characters')
    .max(15, 'must be lower than 15 characters'),
  lastname: yup.string()
    .required()
    .min(4, 'must be upper than 4 characters')
    .max(25, 'must be lower than 25 characters'),
  age: yup.string()
    .required()
    .test('is-num-18-99', 'age must be a number between 18 - 99', (val) => {
      return parseInt(val) < 100 && parseInt(val) > 17;
    }),
  city: yup.string()
    .required()
    .min(8, 'must be upper than 8 characters')
    .max(15, 'must be lower than 15 characters'),
  zipcode: yup.string()
    .required(),
    //.test('len', 'Must be exactly 5 characters', val => val.length === 5),
  address: yup.string()
    .required()
    .min(4, 'must be upper than 4 characters')
    .max(40, 'must be lower than 40 characters'),
});

function SignupForm(props) {

  const [avatar, setAvatar] = useState({ avatar: '' });
  const [errors, setErrors] = useState([]);

  resetError = (field) => {
    const erronedFields = errors.map((err => err.field))
    if (erronedFields.includes(field)) {
      const index = erronedFields.indexOf(field)
      errors.splice(index, 1)
      setErrors(errors)
    }
  }
  return (

    <ScrollView style={globalStyles.container}>
      <AvatarUpload
              resetError={this.resetError}
              erroned={errors.map(err => err.field).includes('avatar')}
              onSelected={(file) => setAvatar(file)} />
      <Formik
        initialValues={{ email: '', password: '', firstname: '',  lastname: '', age: '', city: '', zipcode: '', address: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          let user = {
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            age: values.age,
            city: values.city,
            zipcode: values.zipcode,
            address: values.address,
            avatar: avatar
          }
          actions.resetForm();
          // have to submit from store here
          //addReview(values);
          props.signup(user);
          console.log("check form after front validations:", user);
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

            <TextInput
              style={globalStyles.input}
              placeholder='John'
              onChangeText={props.handleChange('firstname')}
              onBlur={props.handleBlur('firstname')}
              value={props.values.firstname}
            />
            <Text style={globalStyles.errorText}>{props.touched.firstname && props.errors.firstname}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Doe'
              onChangeText={props.handleChange('lastname')}
              onBlur={props.handleBlur('lastname')}
              value={props.values.lastname}
            />
            <Text style={globalStyles.errorText}>{props.touched.lastname && props.errors.lastname}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='29'
              onChangeText={props.handleChange('age')}
              onBlur={props.handleBlur('age')}
              value={props.values.age}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.age && props.errors.age}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Nice'
              onChangeText={props.handleChange('city')}
              onBlur={props.handleBlur('city')}
              value={props.values.city}
            />
            <Text style={globalStyles.errorText}>{props.touched.city && props.errors.city}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='06000'
              onChangeText={props.handleChange('zipcode')}
              onBlur={props.handleBlur('zipcode')}
              value={props.values.zipcode}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.zipcode && props.errors.zipcode}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='2 rue trachel'
              onChangeText={props.handleChange('address')}
              onBlur={props.handleBlur('address')}
              value={props.values.address}
            />
            <Text style={globalStyles.errorText}>{props.touched.address && props.errors.address}</Text>

            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </ScrollView>

  );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
