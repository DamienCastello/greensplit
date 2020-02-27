import React, { Component } from 'react'
import { Toast, Root, Button } from 'native-base';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux'
import { login } from '../../../store/actions/auth'
//import GlobalFooter from '../../../components/GlobalFooter';



class LoginForm extends Component {
  static navigationOptions = {
    title: 'Connexion',
  };
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  loginUser = async () => {
    const response = await this.props.login(this.state.email, this.state.password);
    if (response.status === 'error') {
      Toast.show({
        text: 'Erreur de connexion',
        buttonText: 'Ok'
      })
    } else if (response.status === 'success') {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { auth } = this.props;
    if (auth.user && auth.user.isConnected) {
      setTimeout(() => {
        //TODO remove before production
        navigate('Home')
      }, 10)
    }
    return (

      <Root>
        <ScrollView style={styles.backgroundApp}>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.flexCenterImg}>
              <Image
                source={require('./Logo_light.png')}
              />
            </View>
            <View style={styles.flexCenter}>
              <Text style={styles.whiteTextLabel}>Email :</Text>
              <View style={styles.yellowBorder}>
                <TextInput
                  onChangeText={(value) => this.setState({ email: value })}
                  placeholder='Entrez votre email'
                  placeholderTextColor={'#F1F0C7'}
                  PlaceholderText={20}
                  style={styles.textInput} />
              </View>

              <Text style={styles.whiteTextLabel}>Mot de passe :</Text>
              <View style={styles.yellowBorder}>
                <TextInput
                  onChangeText={(value) => this.setState({ password: value })}
                  placeholder='******'
                  placeholderTextColor={'#F1F0C7'}
                  secureTextEntry={true}
                  style={styles.textInput} />
              </View>
              <TouchableOpacity onPress={() => navigate("forgetPassword")}>
                <Text style={styles.whiteTextLabel} >Mot de passe oublié ?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.flexCenterImg}>
            <Button primary fontSize={25} onPressFunc={() => this.loginUser()}><Text> Primary </Text></Button>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        {/* <GlobalFooter/> */}
      </Root>
    )
  }
}

const styles = StyleSheet.create({
  backgroundApp: {
    backgroundColor: '#2D2D2D',
    flex: 1,

  },

  flexCenterImg: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30
  },

  flexCenter: {
    alignSelf: 'center',
    alignItems: 'stretch',
    marginTop: 20,
    width: 300
  },

  whiteTextLabel: {
    color: '#F1F0C7',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Tinos_bold'
  },

  yellowBorder: {
    borderBottomColor: '#FDC500',
    borderBottomWidth: 3,
    marginBottom: 30,
    paddingBottom: 20,
  },
  textInput: {
    color: '#F1F0C7',
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  login
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
