import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import BackgroundCube from './BackgroundCube'
import './Home.css'
// import PlainPlaces from './PlainPlaces'
const BackgroundGlobe = React.lazy(() => import('./BackgroundGlobe'))
// const Places = React.lazy(()=> import('./Places'))
//what the fallback return should be another three.js model

const Home = () => {

  return (
    <div className="background-container">
      <div className="title">I G L O B E</div>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60}}>
        <ambientLight intensity={3.5} />
          <Suspense fallback={<BackgroundCube
              position={[0, 0, 0]}
              color='black'
              args={[4.5, 100, 100]}/>}>
            <BackgroundGlobe
              position={[0, 0, 0]}
              color='lightblue'
              args={[3.8, 100, 100]}
            />
          </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Home;
