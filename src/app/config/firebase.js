import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  //Paste your Firebase project configuration below

}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)

export default firebase;