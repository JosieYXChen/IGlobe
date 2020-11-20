// useEffect is used for data calls
import React, {useState, useEffect, useRef} from 'react'
import Globe from 'react-globe.gl'
import nightView from './globeNight.jpg'
import starField from './starField.png'

const dummyData =[
  {
    "name": "Philadelphia",
    "country": "USA",
    "lat": 39.95,
    "lon": -75.16,
    "years": 10
  },
  {
    "name": "New York City",
    "country": "USA",
    "lat": 40.71,
    "lon": -74.00,
    "years": 0.1
  },
  {
    "name": "Chicago",
    "country": "USA",
    "lat": 41.87,
    "lon": -87.62,
    "years": 2
  },
  {
    "name": "Beijing",
    "country": "China",
    "lat": 39.90,
    "lon": 116.40,
    "years": 4
  }
];

const routes = {}
// change pop_max to duration
// label altitude ranges from 0.1 - 1.1
// label size and dot radius range from 0.5 - 1.5

const Places = () => {

  // const [places, setPlaces] = useState([]);
  // setPlaces([dummyData])
  // console.log(places);

  return <Globe
    globeImageUrl={nightView}
    waitForGlobeReady={true}
    backgroundImageUrl={starField}

    labelsData={dummyData}
    labelLat={(d)=> d.lat}
    labelLng={(d)=> d.lon}
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
