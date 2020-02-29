import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Login() {
    return (
        <View>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Login screen</Text>
            </View>
        </View>
    )
}