// useEffect is used for data calls
import React, {useState, useEffect, useRef} from 'react'
import Globe from 'react-globe.gl'
import nightView from './globeNight.jpg'
import starField from './starField.png'
import firebase from 'firebase';

const MAP_CENTER = {
  lat: 39.95,
  lng: -75.16,
  altitude: 2.5
}

// label altitude ranges from 0.1 - 1.1
// label size and dot radius range from 0.5 - 1.5


const Places = () => {
  const globeEl = useRef();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const rootRef = firebase.database().ref().child('places');
    rootRef.on('value', async (snapshot) => {
      const data = await snapshot.val()
      setPlaces(data);
    }, error => console.log(error))
    globeEl.current.pointOfView(MAP_CENTER, 4000)
  }, [])

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
