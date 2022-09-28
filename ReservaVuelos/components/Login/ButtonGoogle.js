import React, {Button} from 'react'
import { AuthContext } from '../navigation/AuthProvider';

const ButtonGoogle = () => {
  //...
  const {login, googleLogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      //...

      <Button 
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => googleLogin()}
      />

      //...
    </View>
  );
};

export default ButtonGoogle;
