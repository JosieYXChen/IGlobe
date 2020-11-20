// useEffect is used for data calls
import React, {useState, useEffect, useRef} from 'react'
import Globe from 'react-globe.gl'
import nightView from './globeNight.jpg'
import starField from './starField.png'

const dummyData =
  {
    "name": "Philadelphia",
    "country": "USA",
    "lat": 39.95,
    "lon": -75.16,
    "pop-max": 1584000
  };
// change pop_max to duration

const Places = () => {
  const [places, setPlaces] = useState([]);
  // setPlaces([dummyData])
  // console.log(places);

  return <Globe
    globeImageUrl={nightView}
    waitForGlobeReady={true}
    backgroundImageUrl={starField}

    labelsData={[dummyData]}
    labelLat="lat"
    labelLng="lon"
    labelText="name"
    labelSize= {"pop_max" * 4e-4}
    labelDotRadius={"pop_max" * 4e-4}
    // {d => Math.sqrt(d.pop_max) * 4e-4}
    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    labelResolution={2}
  />
}

export default Places;
