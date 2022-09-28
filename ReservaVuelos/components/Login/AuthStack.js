import React, {useEffect} from "react";
import { GoogleSignin } from '@react-native-community/google-signin';

export const AuthStack = () =>{

    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '461005498193-4s77ebsk8tmqv35cmfl6o8eb02q1npnh.apps.googleusercontent.com',
        });
      }, []);
}



