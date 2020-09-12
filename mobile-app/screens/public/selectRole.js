import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Card from '../../shared/card';
import { globalStyles } from '../../styles/global.js';

const cards = [
    { title: 'Consumer', name: 'torso', type: 'foundation', key: '1' },
    { title: 'Company', name: 'torsos-all', type: 'foundation', key: '2' },
    { title: 'Deliverer', name: 'arrows-out', type: 'foundation', key: '3' },
  ];

function SelectRole({navigation}) {


  goLog = (role) => {
    console.log(navigation.state.params.selectedAuth);
    if (navigation.state.params.selectedAuth === 'login') {
      if (role === 'Consumer') {
        navigation.navigate('LoginUser')
      } 
      if (role === 'Company') {
        navigation.navigate('LoginCompany')
      }
      if (role === 'Deliverer') {
        navigation.navigate('LoginDeliverer')
      }
    }
    if (navigation.state.params.selectedAuth === 'signup') {
      if (role === 'Consumer') {
        navigation.navigate('SignUpUser')
      }
      if (role === 'Company') {
        navigation.navigate('SignUpCompany')
      }
      if (role === 'Deliverer') {
        navigation.navigate('SignUpDeliverer')
      }
    }
  }

  return (
    cards.map((card) => {
        return (
          <View style={globalStyles.authStackMargin} key={card.key}>
              <Text>{card.title}</Text>
              <TouchableOpacity onPress={() => {goLog(card.title)}}>
            <Card>
            <Text>{card.title}</Text>
              <Icon
                name={card.name}
                type={card.type}
              />
            </Card>
            </TouchableOpacity>
          </View>
        );
      })
  );
}

export default (SelectRole)
