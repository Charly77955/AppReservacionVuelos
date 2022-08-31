import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import MainStack from './components/MainStack';
import Appstyles from './components/GeneralStyles/Styles.sass';

export default function App() {
  return (
    <SafeAreaView style={Appstyles.container}>
      <MainStack />
    </SafeAreaView>
  );
}
