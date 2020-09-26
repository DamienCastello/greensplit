import React from 'react';
import { ScrollView, View, Text, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { globalStyles } from '../styles/global.js';
import store from '../store/index';
import { fetchProducts } from '../store/actions/product';

const defaultProducts = [];

class UserHome extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        products: defaultProducts,
      };
  }

  componentDidMount() {
    this.props.fetchProducts();
    console.log('props from homeUser : ', this.props, '& state : ', this.state);
  }

  render() {
    console.log("check before return in userHome : ", this.props);
      return (
        <ScrollView style={globalStyles.container}>
        <View style={globalStyles.authStackMargin}>
         <Text>USER HOME</Text>
         {this.props.products.map((product, index)=>{
           console.log("product to display : ", product);
           return (
            <View style={globalStyles.container}>
              <View style={globalStyles.card} key={index}>
                <Text style={globalStyles.titleText}>{product.name} - {product.species}</Text>
                <Text>Prix/g : {product.price}</Text>
                <Text>Stock restants :{product.price}g</Text>
                <Image source={{uri: product.preview}}
                      style={{width: 200, height: 200}} />
              </View>
            </View>
          )
         })}
        <Button
          style={globalStyles.SpaceY1}
          title="check store"
          onPress={() => {
            console.log("my store:", store.getState(), this.props)
          }}
        />
        </View>
      </ScrollView>
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
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)
