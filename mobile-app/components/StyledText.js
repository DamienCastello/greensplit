import * as React from 'react';
import { Text } from 'react-native';

export function RobotoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'roboto-regular' }]} />;
}
