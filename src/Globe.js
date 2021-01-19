// useEffect is used for data calls
import React, {useState, useEffect, useRef} from 'react'
import Globe from 'react-globe.gl'
import nightView from './globeNight.jpg'
import starField from './starField.png'


// label altitude ranges from 0.1 - 1.1
// label size and dot radius range from 0.5 - 1.5


const Places = (props) => {
  const globeEl = useRef();
  const places = props.places;

  useEffect(()=> {
    // set the last place in the array as the point of view
    const leng = props.places.length;
    if (leng) {
      const {lat, lng} = (props.places[leng - 1]);
      globeEl.current.pointOfView({lat, lng, altitude: 2.5}, 4000)
    }
  })

  return <Globe
    ref={globeEl}
    backgroundImageUrl={starField}
    globeImageUrl={nightView}
    labelsData={places}
    labelLat={(d)=> d.lat}
    labelLng={(d)=> d.lng}
    labelText={(d)=> d.name}
    labelAltitude={(d) => {
      if (d.years > 20) return 1.1;
      return 0.1 + Math.floor(d.years / 2) / 10;
    }}
    labelSize= {(d) => {
      if(d.years > 20) return 1.5
      return 0.5 + Math.floor(d.years / 2) /10
    }}
    labelDotRadius={(d) => {
      if(d.years > 20) return 1.5
      return 0.5 + Math.floor(d.years / 2) /10
    }}
    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    labelResolution={5}
  />
}

export default Places;
