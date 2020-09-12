
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import Card from '../../shared/card';
import { globalStyles } from '../../styles/global';


const cards = [
  { title: 'Consumer', name: 'torso', type: 'foundation', key: '1' },
  { title: 'Company', name: 'torsos-all', type: 'foundation', key: '2' },
  { title: 'Deliverer', name: 'arrows-out', type: 'foundation', key: '3' },
];

function SelectToLog({navigation}) {
return(
      cards.map((card) => {
        return (
          <View style={globalStyles.container} key={card.key}>
              <Text>{card.title}</Text>
              <TouchableOpacity onPress={() => {navigation.navigate('Login', {role: card.title})}}>
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



export default SelectToLog;
