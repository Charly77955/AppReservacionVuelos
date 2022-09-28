import { GoogleSignin } from '@react-native-community/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        //...
        googleLogin: async () => {
          // Get the users ID token
          const { idToken } = await GoogleSignin.signIn();
          
          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
          // Sign-in the user with the credential
          return auth().signInWithCredential(googleCredential);
        },
        //...
      }}>
      {children}
    </AuthContext.Provider>
  );
};