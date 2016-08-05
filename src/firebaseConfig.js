import firebase from 'firebase';
import config from './config';
function HajarSir(){

firebase.initializeApp(config);
}

HajarSir.prototype.initFirebase = function(first_argument) {
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};