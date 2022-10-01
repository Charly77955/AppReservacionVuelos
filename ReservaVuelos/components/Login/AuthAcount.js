import React from 'react';
import auth from '@react-native-firebase/auth';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword} from 'firebase/auth';

  export const handleCreateAcount = (email, password) =>{
    console.log(email + ", " + password)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }
  export const handleSignIn = (props, email, password) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Signed in!')
      const user = userCredential.user;
      props.navigation.navigate('Home')
    })
    .catch(error => {
      alert(error)
    })
  }