//export default class StartApp extends Component {
    import React from 'react';
    import { connect } from 'react-redux'
    import { StyleSheet, View, Text, Button } from 'react-native';
    import { globalStyles } from '../../styles/global.js';
    import { withNavigation } from 'react-navigation';
    import store from '../../store/index';
    
    class StartApp extends React.Component {
    
      componentDidMount() {
        const user = this.props.auth.user
        const company = this.props.auth.company
        const runer = this.props.auth.runer
        console.log("check props auth of start app ", user, company, runer);
        console.log("check connect function value of start app : ", this.connected(user, company, runer));
        console.log("check store of start app : ", store.getState());
        console.log("check props of start app", this.props);
        if (this.connected(user, company, runer)) {
          this.props.navigation.navigate('DrawerMenu')
        } else {
          this.props.navigation.navigate('Auth')
        }
      }

      connected = (user, company, runer) => {
        console.log("check params of connect : ", user, company, runer);
        if (user.token !== null) {
          return true;
        }
        if (company.token !== null) {
          return true;
        }
        if (runer.token !== null) {
          return true;
        } else {
          return false;
        }
      }
    
    
      render() {
        return (
          <View style={styleStart.container}>
              <Text>Start app screen ...</Text>
              <Button
          style={globalStyles.SpaceY1}
          title="check store"
          onPress={() => {
            console.log("my store:", store.getState(), this.props)
          }}
        />
          </View>
        );
      }
    }
    
    const mapStateToProps = (state) => ({
        products: state.products,
        auth: {
          user: state.auth.user,
          company: state.auth.company,
          runer: state.auth.runer
        }
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
    