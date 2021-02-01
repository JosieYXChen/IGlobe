import React, { useRef }from 'react'
// Canvas creates a scene and camera
// useFrame renders animations
import { softShadows } from 'drei'
// there are two ways to access an image, if in the same folder as the current js file, then import; if in public fold, then process.env.PUBLIC_URL + '/earth.jpg'

softShadows()

const BackgroundCube = ({ position, color, args}) => {
  // make mesh available as a ref in the life cycle of this component
  const mesh = useRef();

  return (
    <mesh
      position={position}
      ref={mesh}>
      <sphereBufferGeometry attach='geometry' args={args} />
      <meshPhongMaterial color={color} attach='material'/>
    </mesh>)
}

export default BackgroundCube;
