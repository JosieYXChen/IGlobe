import './App.css';
// Canvas creates a scene and camera
import React, { Suspense } from 'react'
import PlainGlobe from './PlainGlobe'
import Form from './Form'
const Globe = React.lazy(()=> import('./Globe'))

//what the fallback return should be another three.js model

function App() {
  return (
    <div>
      <Form />
      <Suspense fallback={<PlainGlobe />}>
        <Globe />
      </Suspense>
    </div>
  );
}

export default App;
