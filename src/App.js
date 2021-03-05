import './App.css';
// Canvas creates a scene and camera
import React, { useState, useEffect, Suspense } from 'react';
import PlainGlobe from './PlainGlobe';
import Nav from './Nav';
import Form from './Form';
import firebase from 'firebase';
import { updateDataBase, clearLocalStorage } from './helper'

const Globe = React.lazy(() => import('./Globe'));

//what the fallback return should be another three.js model

function App() {
  const [places, setPlaces] = useState([]);
  const [placeNum, setPlaceNum] = useState(0);

  useEffect(() => {
    if(firebase.auth().currentUser){
      const userId = firebase.auth().currentUser.uid;
      const rootRef = firebase.database().ref('/users/' + userId + '/places');
      rootRef.on('value', async (snapshot) => {
        const data = await snapshot.val();
        if(data) setPlaces(data);
      }, error => console.log(error))

    } else {
      if(window.localStorage.places) setPlaces(JSON.parse(window.localStorage.getItem('places')));
      setPlaceNum(places.length);
    }
  }, [placeNum])

  return (
    <div>
      <Nav />
      <Form places={places} setPlaces={setPlaces} placeNum={placeNum} setPlaceNum ={setPlaceNum}/>
      <Suspense fallback={<PlainGlobe />}>
        <Globe places={places} setPlaces={setPlaces} />
      </Suspense>
    </div>
  );
}

export default App;
