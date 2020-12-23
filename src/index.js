import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBIUjEk-0kpUC2wnQs2hGzoaUDkAQRgpwo",
  authDomain: "iglobe-cc8df.firebaseapp.com",
  databaseURL: "https://iglobe-cc8df.firebaseio.com",
  projectId: "iglobe-cc8df",
  storageBucket: "iglobe-cc8df.appspot.com",
  messagingSenderId: "632519396036",
  appId: "1:632519396036:web:2b1da647465ec187a25791",
  measurementId: "G-2VYTYGSHQ3"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
