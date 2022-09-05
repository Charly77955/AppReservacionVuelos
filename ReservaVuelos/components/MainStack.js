import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Booking from './Booking/Booking';
import MyFlightsScreen from './MyFlightsScreen/MyFlightsScreen';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyFlightsScreen" component={MyFlightsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
