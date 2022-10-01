import React, { useState, useEffect } from 'react';
import { View, StyleSheet, alert, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import {API_URL} from '@env';


const GoogleSignInComponent = (props) => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:"461005498193-4s77ebsk8tmqv35cmfl6o8eb02q1npnh.apps.googleusercontent.com",
    });
  }, [])
  

  const onGoogleButtonPress = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          alert('You cancelled the sign in.');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Google sign In operation is in process');
        } else if (
          error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
        ) {
          alert('Play Services not available');
        } else {
          alert(
            'Something unknown went wrong with Google sign in. ' +
              error.message,
          );
        }
      }
  }

  return (
    <View style={styles.separator}>
     
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress().then(() => {
          console.log('Signed in with Google!')
        
        })}
        disabled={loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  separator: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderColor: 'gray'
  },
})

export default GoogleSignInComponent;