import firebase from 'firebase';
import store from './containers/store'
var config = {
    apiKey: "AIzaSyD_Vt4f7sw_lNR38cnUIFMzWT_grIi76nU",
    authDomain: "hajar-sir.firebaseapp.com",
    databaseURL: "https://hajar-sir.firebaseio.com",
    storageBucket: "hajar-sir.appspot.com",
};

firebase.initializeApp(config);
var auth = firebase.auth();
var database = firebase.database();
var uid = '';
auth.onAuthStateChanged(function(user) {
    if (user) {
      //user.uid is important dont delete
        uid= user.uid;
        store.dispatch({type:'USER_AUTH',login:true,user:user});
        getData();

    } else {
        //user loged out
        store.dispatch({type:'USER_AUTH',login:false});
    }
});
export var signIn = function() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);
        // ...
    });

};

// Signs-out of HajarSir.
export var signOut = function() {
    // Sign out of Firebase.
    auth.signOut().then(function() {
        // Sign-out successful.
        console.log('successful');
    }, function(error) {
        // An error happened.
        console.log(error);
    });
};
export var saveToFirebase = function() {
    var currentUser = auth.currentUser;
    var state = store.getState();
    console.log(state);
    var Ref = database.ref('users/' + uid);
    Ref.set(state);
}
export var getData = function() {
    var currentUser = auth.currentUser;
    var Ref = database.ref('users/' + uid);
    if (Ref) {
        Ref.on('value', function(snapshot) {
            if (snapshot.val()) {
               // console.log("snapshot has value", snapshot.val());
               store.dispatch({ type: 'LOAD_STORE', store: snapshot.val() });
                //console.log(snapshot.val().store);
            } else {
                console.log('snapshot has no value');
            }
        });
    } else {
        console.log('')
    }

}

