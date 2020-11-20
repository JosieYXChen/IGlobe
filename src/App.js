import './App.css';
// Canvas creates a scene and camera
import React, { Suspense } from 'react'
// import { Canvas } from 'react-three-fiber'
// import { OrbitControls } from 'drei'
// import Cube from './Cube'
import PlainPlaces from './PlainPlaces'
// const Globe = React.lazy(() => import('./Globe'))
const Places = React.lazy(()=> import('./Places'))
//what the fallback return should be another three.js model

function App() {
  return (
    <Suspense fallback={<PlainPlaces />}>
      <Places />
    </Suspense>
      // <Canvas
      //   colorManagement
      //   shadowMap
      //   camera={{ position: [-5, 2, 10], fov: 60}}>
      //   <ambientLight intensity={8.0} />
      //   {/* <directionalLight
      //     position={[-10, 0, -30]}
      //     angle={100}
      //     intensity={2.0}
      //   /> */}
      //     <Suspense fallback={<Cube
      //         position={[0, 0, 0]}
      //         color='lightblue'
      //         args={[4.5, 100, 100]}/>}>
      //       <Globe
      //         position={[0, 0, 0]}
      //         color='lightblue'
      //         args={[4.5, 100, 100]}
      //       />
      //     </Suspense>
      //   <OrbitControls />
      // </Canvas>
  );
}

export default App;
