import React from 'react';
import { 
    getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword} from 'firebase/auth';

    
  export const handleCreateAcount = (email, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      alert('Acount created!')
      const user = userCredential.user;
    })
    .catch(error => {
      alert(error)
    })
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