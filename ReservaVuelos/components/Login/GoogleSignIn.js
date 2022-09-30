import React, { useState, useEffect } from 'react';
import { View, StyleSheet, alert, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import {API_URL} from '@env';


const GoogleSignIn = (props) => {
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:"AIzaSyB2bNskB-zUQaP6wa-IPTltqohLSOYjDvc",
    });
  }, [])
  

  const googleSignIn = async () => {
    setLoading(true)
    const { idToken } = await GoogleSignin.signIn().catch((e) => {
      console.log(e.message)
      setLoading(false)
    });
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential)
      .then((res) => {
        setUserInfo(res);
      }).catch((e) => {
        alert(e.message)
      });
    const accessToken = (await GoogleSignin.getTokens()).accessToken;
    setLoading(false)
    props.navigation.navigate('Home')
  }
  const googleSignOut = async () => {
    setLoading(true)
    auth().signOut().then(async () => {
      await GoogleSignin.signOut();
      await GoogleSignin.revokeAccess();
      alert('User sign-out successfully!');
    }).catch(e => alert(e.message));
    setLoading(false)
  }

  return (
    <View style={styles.separator}>
     
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={googleSignIn}
        disabled={loading}
      />
      <Button
        loading={loading}
        title={'Google Sign-Out'}
        onPress={googleSignOut} />
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

export default GoogleSignIn;