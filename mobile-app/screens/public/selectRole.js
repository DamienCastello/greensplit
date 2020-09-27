import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Card from '../../shared/card';
import { globalStyles } from '../../styles/global.js';

const cards = [
    { title: 'Consommateur', name: 'torso', type: 'foundation', key: '1' },
    { title: 'Entreprise', name: 'torsos-all', type: 'foundation', key: '2' },
    { title: 'Livreur', name: 'arrows-out', type: 'foundation', key: '3' },
  ];

function SelectRole({navigation}) {


  goLog = (role) => {
    console.log(navigation.state.params.selectedAuth);
    if (navigation.state.params.selectedAuth === 'login') {
      if (role === 'Consommateur') {
        navigation.navigate('LoginUser')
      } 
      if (role === 'Entreprise') {
        navigation.navigate('LoginCompany')
      }
      if (role === 'Livreur') {
        navigation.navigate('LoginDeliverer')
      }
    }
    if (navigation.state.params.selectedAuth === 'signup') {
      if (role === 'Consommateur') {
        navigation.navigate('SignUpUser')
      }
      if (role === 'Entreprise') {
        navigation.navigate('SignUpCompany')
      }
      if (role === 'Livreur') {
        navigation.navigate('SignUpDeliverer')
      }
    }
  }

  return (
    cards.map((card) => {
        return (
          <View style={globalStyles.authStackMargin} key={card.key}>
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
