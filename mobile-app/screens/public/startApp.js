//export default class StartApp extends Component {
    import React from 'react';
    import { connect } from 'react-redux'
    import { StyleSheet, View, Text } from 'react-native';
    import { withNavigation } from 'react-navigation';
    
    class StartApp extends React.Component {
    
      componentDidMount() {
        const { user } = this.props;
        const { company } = this.props;
        const { runer } = this.props;
        console.log("check state of start app (=store) ", user, company, runer);
        if (this.connected(user, company, runer)) {
          this.props.navigation.navigate('DrawerMenu')
        } else {
          this.props.navigation.navigate('Auth')
        }
      }

      connected = (user, company, runer) => {
        if (user.token) {
          return true;
        }
        if (company.token) {
          return true;
        }
        if (runer.token) {
          return true;
        } else {
          return false;
        }
      }
    
    
      render() {
        return (
          <View style={styleStart.container}>
              <Text>Start app screen ...</Text>
          </View>
        );
      }
    }
    
    const mapStateToProps = (state) => ({
        user: state.user,
        company: state.company,
        runer: state.runer
    })
    
    const mapDispatchToProps = {
    
    }
    export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(StartApp))

    const styleStart = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
    });
    