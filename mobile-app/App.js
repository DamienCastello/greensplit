import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './navigation/StackNavigator';
//import { PersistGate } from "redux-persist/integration/react";
//import persistor from "./store/persistor";
import { Provider } from "react-redux";
import store from './store';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Navigator />
        {/* </PersistGate> */}
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}