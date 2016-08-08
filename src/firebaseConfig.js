import firebase from 'firebase';
import config from './config';
function HajarSir(){

	this.userPic = document.getElementById('user-pic');
    this.userName = document.getElementById('user-name');
    this.signInButton = document.getElementById('sign-in');
    this.signOutButton = document.getElementById('sign-out');
	firebase.initializeApp(config);
	initFirebase()
}

HajarSir.prototype.initFirebase = function() {
  this.auth = firebase.auth();
  this.database = firebase.database();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

HajarSir.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
};

// Signs-out of HajarSir.
HajarSir.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};


// Triggers when the auth state change for instance when the user signs-in or signs-out.
HajarSir.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL;  
    var userName = user.displayName;        

    // Set the user's profile pic and name.
    this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
    this.userName.textContent = userName;

    // Show user's profile and sign-out button.
    this.userName.removeAttribute('hidden');
    this.userPic.removeAttribute('hidden');
    this.signOutButton.removeAttribute('hidden');

    // Hide sign-in button.
    this.signInButton.setAttribute('hidden', 'true');

    // We load currently existing chant messages.
    this.loadMessages();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    this.userName.setAttribute('hidden', 'true');
    this.userPic.setAttribute('hidden', 'true');
    this.signOutButton.setAttribute('hidden', 'true');

    // Show sign-in button.
    this.signInButton.removeAttribute('hidden');
  }
};
// Save the store to the firebase db
FriendlyChat.prototype.saveStore = function(e) {
    e.preventDefault();
    this.usersRef = this.database.ref('users');

    var currentUser = this.auth.currentUser;
    // Add a new message entry to the Firebase Database.
    this.usersRef.push({
      name: currentUser.displayName,
      text: this.messageInput.value,
      photoUrl: currentUser.photoURL || '/images/profile_placeholder.png'
    }).then(function() {
      // do something
    }.bind(this)).catch(function(error) {
      console.error('Error writing new store to Firebase Database', error);
    });
  
};