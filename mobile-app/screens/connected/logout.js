import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../styles/global';
import FlatButton from '../../shared/button';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

class Logout extends React.Component {
    constructor(props){
        super(props);
    }
    
    logout = () =>{
        this.props.logout();
        this.props.navigation.navigate('StartApp');
    };

    render() {
        return (
        <View style={globalStyles.container}>
            <FlatButton onPress={() => this.logout()} text='Log Out' />
        </View>
    );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
