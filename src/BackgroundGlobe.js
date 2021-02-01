import React, { useRef }from 'react'
// Canvas creates a scene and camera
// useFrame renders animations
import { useFrame, useLoader } from 'react-three-fiber'
import { softShadows } from 'drei'
import * as THREE from 'three'
// there are two ways to access an image, if in the same folder as the current js file, then import; if in public fold, then process.env.PUBLIC_URL + '/earth.jpg'
import map from './globeNight.jpg'

softShadows()

const BackgroundGlobe = ({ position, color, args}) => {
  // make mesh available as a ref in the life cycle of this component
  const mesh = useRef();
  useFrame(()=> (mesh.current.rotation.y += 0.004))
  const texture = useLoader(THREE.TextureLoader, map)

  return (
    <mesh
      position={position}
      ref={mesh}>
      <sphereBufferGeometry attach='geometry' args={args} />
      <meshPhongMaterial color={color} attach='material' map={texture} />
    </mesh>)
}

export default BackgroundGlobe;
