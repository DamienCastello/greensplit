import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
