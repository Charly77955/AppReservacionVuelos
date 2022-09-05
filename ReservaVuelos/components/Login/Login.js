import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import Appstyles from './Login.sass';
import {CheckBox, Button} from '@rneui/themed';

export default function Login() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <SafeAreaView>
      <View style={Appstyles.LoginBody}>
        <Text style={Appstyles.TextSign}>Sign Up</Text>
      </View>
      <View>
        <Text style={Appstyles.FirstName}>First Name</Text>
        <TextInput style={Appstyles.inputName} placeholder="Write your name" />
        <TextInput
          style={Appstyles.inputEmail}
          placeholder="Write your email"
        />
        <Text style={Appstyles.Email}>Email</Text>
        <TextInput
          style={Appstyles.inputPass}
          placeholder="Write your password"
        />
        <Text style={Appstyles.Password}>Password</Text>
        <Text style={Appstyles.Require}>
          Use 8 or more characters with a mix of letters, numbers and simbols
        </Text>
        <View style={Appstyles.caja1}>
          <CheckBox
            center
            title="I agree to the Terms and Privacy Policy"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
        </View>
        <View style={Appstyles.Caja1}>
          <CheckBox
            center
            title="Suscribe for select product updates"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
        </View>

        <View style={Appstyles.ButtonSign}>
          <Button title="Sign Up" disabled={true} />
        </View>
        <View>
          <Button 
          style={Appstyles.ButtonSignWithG}
          title="Sing Up with Google"s
          disabled={true} />
        </View>
      </View>
    </SafeAreaView>
  );
}
