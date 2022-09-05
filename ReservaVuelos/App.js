
import React from "react";
import MainStack from "./components/MainStack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App(){
    return(
        <SafeAreaProvider>
        <MainStack/>
        </SafeAreaProvider>
    )
}

import Appstyles from './components/GeneralStyles/Styles.sass';
import MainStack from './components/MainStack';
import React from 'react';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={Appstyles.container}>
      <MainStack />
    </SafeAreaView>
  );
}

