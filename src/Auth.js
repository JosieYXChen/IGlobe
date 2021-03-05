import React, { useEffect, useState } from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase';
import App from './App';
import Nav from './Nav';
import './Auth.css'
import './firebaseui-styling.global.css'


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/#/app',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const Auth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver();
  }, []);

  if (!firebase.auth().currentUser) {
      return <div className="auth-container">
        <Nav />
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
  }

  // move local storage to database once user signs in
  // if(window.localStorage.places) {
  //   console.log('is this running?');
  //   const localPlaces = JSON.parse(window.localStorage.getItem('places'));
  //   console.log(localPlaces);
  //   localPlaces.forEach(place => updateDataBase(place));
  //   clearLocalStorage()
  // }

  // console.log("where is this leading to", isSignedIn, firebase.auth().currentUser.uid);
  console.log(isSignedIn);

  return <App />;
};

export default Auth;


