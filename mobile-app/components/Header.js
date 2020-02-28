import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Header (){
    return (
        <View style={styles.header}>
            <ImageBackground 
            source={{uri:"https://www.transparenttextures.com/patterns/binding-dark.png"}} 
            style={{width: '100%', height: '100%'}}>
            <Text style={styles.title}>WELCOME TO GREENSPLIT</Text>
  </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        width: '100%',
        backgroundColor: '#006e07',
        borderWidth: 5,
        borderRadius: 3,
        borderColor: '#1c1c1c',
        borderStyle: 'solid',
        
    },
    title: {
        textAlign: 'center',
        paddingTop: 35,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        
    },
})