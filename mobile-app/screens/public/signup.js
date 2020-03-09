/*import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Signup() {
    return (
        <View>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Signup screen</Text>
            </View>
        </View>
    )
}*/

import React, { Component } from 'react';
import { Text, ScrollView, View, KeyboardAvoidingView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import InputField from '../../components/inputField';
import Avatar from '../../components/avatar';
import { connect } from 'react-redux'
import { signup } from '../../store/actions/auth';
import { Toast, Root } from 'native-base';
import Axios from 'axios';
import url from '../../constants/url';




//const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'Please provide a valid email address.' : undefined;
//const requiredFields = ['avatar', 'email', 'firstName', 'lastname', 'age', 'city', 'zipcode', 'address', 'password', 'confirmPassword']

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            email: '',
            firstName: '',
            lastname: '',
            password: '',
            confirmPassword: '',
            age: '',
            city: '',
            zipcode: '',
            address: '',
            avatar: '',
            loading: false
        }
    }

    componentDidMount(){
        Axios.get(`${url.baseUrl}/users`)
        .then((response) => { console.log(JSON.stringify(response)); })
        .catch((error) => { console.log(error); });
    }

    submitForm = async () => {
        /*this.setState({ loading: true })
        let errors = [];
        requiredFields.forEach(item => {
            if (this.state[item].length < 1) {
                errors.push({ field: item, error: "Champ obligatoire " });
            }
        });
        this.setState({ errors: errors });
        if (errors.length < 1) {
            const response = await this.props.signup(this.state)
            if (response.status === "success") {
                Toast.show({
                    text: 'Inscription réussie',
                    position: 'top',
                    type: 'success',
                })
                // setTimeout(() => {
                //     this.props.navigation.navigate('BottomTab')
                // }, 500)
            }
            else {
                Toast.show({
                    text: response.error.data.message,
                    position: 'top',
                    type: 'danger'
                })
            }
        }
        this.setState({ loading: false })*/

        this.setState({ loading: true })
console.log("enter")
            const response = await this.props.signup(this.state)
            if (response.status === "success") {
                Toast.show({
                    text: 'Inscription réussie',
                    position: 'top',
                    type: 'success',
                })
                // setTimeout(() => {
                //     this.props.navigation.navigate('BottomTab')
                // }, 500)
            }
            else {
                Toast.show({
                    text: response.error.data.message,
                    position: 'top',
                    type: 'danger'
                })
            }
        
        this.setState({ loading: false })
    }

    handleTextChange = (field, value) => {
        this.setState({ [field]: value })
        this.resetError(field)
    }

    resetError = (field) => {
        const { errors } = this.state
        const erronedFields = errors.map((err => err.field))
        if (erronedFields.includes(field)) {
            const index = erronedFields.indexOf(field)
            errors.splice(index, 1)
            this.setState({ errors })
        }
    }

    render() {
console.log('signup_props:', this.props);
console.log('signup_state:', this.state);
        return (
            <Root>
                <View style={{ alignSelf: 'center', backgroundColor: '#2D2D2D', width: '100%' }}>
                    <SafeAreaView style={{ flex: 0, backgroundColor: 'transparent' }} />
                    <Text style={{
                        color: 'white',
                        alignSelf: 'center',
                        marginBottom: 10,
                        marginTop: 25,
                        fontWeight: 'bold',
                        fontSize: 40
                    }}>
                        Inscription
          </Text>
                </View>
                <KeyboardAvoidingView behavior="padding" enabled >
                    <ScrollView style={{ backgroundColor: '#2D2D2D' }}>

                        <Avatar
                            resetError={this.resetError}
                            erroned={this.state.errors.map(err => err.field).includes('avatar')}
                            onSelected={(file) => this.setState({ avatar: file })} />

                        <Form
                            style={{ alignSelf: 'center', width: '90%' }}
                            ref={(ref) => this.myForm = ref}
                            validate={true}
                            errors={this.state.errors}

                        >
                            <Text style={style.inputText}>Nom</Text>
                            <Field
                                component={InputField}
                                name="lastname"
                                value={this.state.lastname}
                                onChangeText={(val) => this.handleTextChange('lastname', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>Prénom</Text>
                            <Field
                                component={InputField}
                                name="firstName"
                                value={this.state.firstName}
                                onChangeText={(val) => this.handleTextChange('firstName', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>age</Text>
                            <Field
                                component={InputField}
                                name="age"
                                value={this.state.age}
                                onChangeText={(val) => this.handleTextChange('age', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>city</Text>
                            <Field
                                component={InputField}
                                name="city"
                                value={this.state.city}
                                onChangeText={(val) => this.handleTextChange('city', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>zipcode</Text>
                            <Field
                                component={InputField}
                                name="zipcode"
                                value={this.state.zipcode}
                                onChangeText={(val) => this.handleTextChange('zipcode', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>address</Text>
                            <Field
                                component={InputField}
                                name="address"
                                value={this.state.address}
                                onChangeText={(val) => this.handleTextChange('address', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>E-mail</Text>
                            <Field
                                component={InputField}
                                name="email"
                                value={this.state.email}
                                onChangeText={(val) => this.handleTextChange('email', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>Mot de passe</Text>
                            <Field
                                secureTextEntry
                                component={InputField}
                                name="password"
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={(val) => this.handleTextChange('password', val)}
                                customStyle={style.field}
                            />

                            <Text style={style.inputText}>Confirmer le mot de passe</Text>
                            <Field
                                secureTextEntry
                                component={InputField}
                                name="confirmPassword"
                                secureTextEntry={true}
                                value={this.state.confirmPassword}
                                onChangeText={(val) => this.handleTextChange('confirmPassword', val)}
                                customStyle={style.field}
                            />
                        </Form>
                        <View style={{ marginBottom: 200 }}>
                            <TouchableOpacity onPress={() => this.submitForm}
                                style={{marginTop: 10, alignSelf: 'center', backgroundColor: 'green'}}
                                disabled={false}
                                activeOpacity={0.2}>
                                <Text>
                                    ok
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Root>
        );
    }
}



const style = {
    field: {
        borderColor: '#FDC500',
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        backgroundColor: 'white'
    },
    inputText: {
        marginBottom: 5,
        marginTop: 25,
        color: 'white',
        fontSize: 18
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    buttonText: {
        marginTop: 82,
        marginLeft: 120,
        position: 'absolute',
        fontSize: 80,
        zIndex: 900,
        color: '#FDC500'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)