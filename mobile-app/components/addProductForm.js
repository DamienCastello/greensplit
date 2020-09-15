import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createProduct } from '../store/actions/product';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';
import AvatarUpload from '../shared/avatar';

const reviewSchema = yup.object({
  name: yup.string()
    .required()
    .min(3, 'must be upper than 6 characters')
    .max(20, 'must be lower than 12 characters'),
  species: yup.string()
    .required()
    .min(3, 'must be upper than 6 characters')
    .max(20, 'must be lower than 12 characters'),
  price: yup.number()
    .required(),
  stock: yup.number()
    .required()
});

function AddProductForm(props, {navigation}) {

  const [preview, setPreview] = useState({ preview: '' });
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
        <View style={globalStyles.authStackMargin}>
          <AvatarUpload
                  resetError={this.resetError}
                  erroned={errors.map(err => err.field).includes('preview')}
                  onSelected={(file) => setPreview(file)} />
          <Formik
            initialValues={{ name: '', species: '', price: '',  stock: '' }}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              let product = {
                name: values.name,
                species: values.species,
                price: parseInt(values.price),
                preview: preview,
                stock: parseInt(values.stock),
                companyId: props.company.id
              }
              actions.resetForm();
              // have to submit from store here
              console.log("check props in AddProductForm", props)
              props.createProduct(product);
              console.log("check form after front validations:", product);
              navigation.navigate('Home')
            }}
          >
          {props => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder='Italian gold'
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
              />
              {/* only if the left value is a valid string, will the right value be displayed */}
              <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='CBD'
                onChangeText={props.handleChange('species')}
                onBlur={props.handleBlur('species')}
                value={props.values.species}
              />
              <Text style={globalStyles.errorText}>{props.touched.species && props.errors.species}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='25'
                onChangeText={props.handleChange('price')}
                onBlur={props.handleBlur('price')}
                value={props.values.price}
              />
              <Text style={globalStyles.errorText}>{props.touched.price && props.errors.price}</Text>

              <TextInput
                style={globalStyles.input}
                placeholder='10'
                onChangeText={props.handleChange('stock')}
                onBlur={props.handleBlur('stock')}
                value={props.values.stock}
              />
              <Text style={globalStyles.errorText}>{props.touched.stock && props.errors.stock}</Text>

              

              <FlatButton onPress={props.handleSubmit} text='submit' />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
    );
}

const mapStateToProps = (state) => ({
    company: state.company,
})

const mapDispatchToProps = {
  createProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
