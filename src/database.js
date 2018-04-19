import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCXZNlzLK7H9d81JoyGnpe2cz9nu0fBOdY',
  authDomain: 'reactreduxfirebasesample.firebaseio.com',
  databaseURL: 'https://reactreduxfirebasesample.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;