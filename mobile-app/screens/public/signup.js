import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

export default function Signup() {
    return (
        <View>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleText}>Signup screen</Text>
            </View>
        </View>
    )
}