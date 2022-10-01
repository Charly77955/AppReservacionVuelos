import React from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword} from 'firebase/auth';

  export const handleCreateAcount = (email, password) =>{
    console.log(email + ", " + password)
    auth()
      .createUserWithEmailAndPassword(props, email, password)
      .then(() => {
        alert('User account created & signed in!');
        props.navigation.navigate('Home')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
      });
  }
  export const handleSignIn = (props,email, password) =>{
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