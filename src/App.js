import './App.css';
// Canvas creates a scene and camera
import React, { useState, useEffect, Suspense } from 'react';
import PlainGlobe from './PlainGlobe';
import Form from './Form';
import firebase from 'firebase';
const Globe = React.lazy(() => import('./Globe'));

//what the fallback return should be another three.js model

function App() {
  const [places, setPlaces] = useState([]);

    useEffect(() => {
    const rootRef = firebase.database().ref().child('places');
    rootRef.on('value', async (snapshot) => {
      const data = await snapshot.val()
      setPlaces(data);
    }, error => console.log(error))
  }, [])

  return (
    <div>
      <Form places={places} setPlaces={setPlaces} />
      <Suspense fallback={<PlainGlobe />}>
        <Globe places={places} setPlaces={setPlaces} />
      </Suspense>
    </div>
  );
}

export default App;
