import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const db = firestore();

export const saveFlight = async (state, navigation) => {
  await db
    .collection('Viajes')
    .add({
      origin: [state.fromCity, state.fromCountry],
      destiny: [state.toCity, state.toCountry],
      date: state.flightDate,
      passengers: state.passengers,
      //uid: current.uid,
    })
    .then(() => {
      navigation.navigate('Home');
    });
};

export const getData = async () => {
  try {
    const arrayFlights = [];
    const usersQuerySnapshot = await firestore()
      .collection('Viajes')
      //.where('uid', '==', current.uid)
      .get();
    usersQuerySnapshot.forEach(documentSnapshot => {
      arrayFlights.push({id: documentSnapshot.id, ...documentSnapshot.data()});
    });
    return arrayFlights;
  } catch (error) {
    const errorName = 'failure when trying to display flights';
  }
};
