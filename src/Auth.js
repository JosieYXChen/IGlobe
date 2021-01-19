import React, { useEffect, useState } from 'react';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase';
import App from './App';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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

  if (!isSignedIn) {
    return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
  }

  return <App />;
};

export default Auth;
