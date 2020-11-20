import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBIUjEk-0kpUC2wnQs2hGzoaUDkAQRgpwo",
  authDomain: "iglobe-cc8df.firebaseapp.com",
  databaseURL: "https://iglobe-cc8df.firebaseio.com",
  projectId: "iglobe-cc8df",
  storageBucket: "iglobe-cc8df.appspot.com",
  messagingSenderId: "632519396036",
  appId: "1:632519396036:web:9e745a8255699ecda25791",
  measurementId: "G-KPTHLCJVZX"
}

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();