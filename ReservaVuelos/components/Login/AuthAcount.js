import React from 'react';
import auth from '@react-native-firebase/auth';
import {getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth(auth);
  export const handleCreateAcount = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Acount created!')
      const user = userCredential.user;
    })
    .catch(error => {
      alert(error)
    })
  }
  export const handleSignIn = (props) =>{
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