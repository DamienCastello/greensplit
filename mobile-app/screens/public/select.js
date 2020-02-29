import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Select() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Select screen</Text>
        </View>
    )
}