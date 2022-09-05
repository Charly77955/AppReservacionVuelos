import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyFlightsStyles from './MyFlightsScreen.sass';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from '@rneui/themed';

export default MyFlightsScreen = props => {
  return (
    <View>
      <Text style={MyFlightsStyles.title}>My flights</Text>
      <TouchableOpacity>
        <View style={MyFlightsStyles.container}>
          <Text style={MyFlightsStyles.placeAcronyms}>BEG</Text>
          <Text style={MyFlightsStyles.placeAcronyms}>AMS</Text>
        </View>
        <View style={MyFlightsStyles.container}>
          <Text style={MyFlightsStyles.places}>Serbia</Text>
          <Text style={MyFlightsStyles.places}>Netherlands</Text>
        </View>
        <View style={MyFlightsStyles.line}></View>
        <View style={MyFlightsStyles.container}>
          <Text style={MyFlightsStyles.details}>September 3, 2020</Text>
          <Text style={MyFlightsStyles.details}>2 passengers</Text>
        </View>
        <View style={MyFlightsStyles.lineEnd}></View>
      </TouchableOpacity>
      <View style={MyFlightsStyles.containerAdd}>
        <Button onPress={() => props.navigation.navigate('Booking')}></Button>
      </View>
    </View>
  );
};
