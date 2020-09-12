import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { authStyles } from '../../styles/auth';
import { globalStyles } from '../../styles/global';
import FlatButton from '../../shared/button';

class AuthMenu extends React.Component {
    render() {
        const navigation  = this.props.navigation;
        return (
        <ScrollView>
            <View style={globalStyles.authStackMargin}>
                <View style={authStyles.imgView}>
                    <Image style={authStyles.logo}
                            source={require('../../assets/img/logo-greensplit.jpg')}/>   
                </View> 
                <View style={authStyles.btnView}>
                    <FlatButton onPress={() => navigation.navigate('SelectRole', {selectedAuth: 'login'})} text='Log In' />            
                </View>
                <View style={authStyles.btnView}>
                    <FlatButton onPress={() => navigation.navigate('SelectRole', {selectedAuth: 'signup'})} text='Sign Up' />            
                </View>
            </View>
        </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenu)
