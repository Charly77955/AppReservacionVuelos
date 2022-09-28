import React from 'react';
import {View, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {WEB_CLIENT_ID} from '@env';

export const ButtonGoogle = () => {
    return (
      <View>
        <GoogleSigninButton
          title={'Login with Google'}
          onPress={() => {
            GoogleSignin.configure({
              androidClientId: WEB_CLIENT_ID,
            });
            async function signIn() {
              try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
              } catch (error) {
              }
            }
            signIn();
          }}
        />
      </View>
    );
  };