import React, { useState, useEffect } from 'react';
import './Form.css';

import Search from './Search';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { dateDiff, updateDataBase, updateLocalStorage, clearDataBase, clearLocalStorage } from './helper'

const Form = (props) => {
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [isFormActive, setFormActive] = useState(false);

  useEffect(() => {
    setFormActive(false)
  },[])

  const handleChange = (event) => {
    switch(event.target.name) {
      case 'start':
        setStart(event.target.value);
        break;
      case 'end':
        setEnd(event.target.value);
        break;
      default: return;
    }
  }

  const handleSearchChange = (address) => {
    setAddress(address);
  }

  const handleSelect = async address => {
    try {
      const results = await geocodeByAddress(address);
      const fullAddress = results[0].formatted_address;
      const { lat, lng } = await getLatLng(results[0]);
      setAddress(fullAddress);
      setLatitude(lat);
      setLongitude(lng);
    } catch (err) {
      console.error('Error', err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const years = dateDiff(
      event.target.start.value,
      event.target.end.value
    );
    const name = address.split(',')[0];
    const lat = Number(latitude);
    const lng = Number(longitude);

    const newPlace = {
      name,
      lat,
      lng,
      years,
    };
    props.places.push(newPlace);
    props.isSignedIn ? updateDataBase(newPlace) : updateLocalStorage(props);

    setAddress('');
    setLatitude('');
    setLongitude('');
    setStart('');
    setEnd('');
    return;
  }

  //handle clear
  const handleClear = () => {
    props.setPlaces([]);
    props.isSignedIn ? clearDataBase(props) : clearLocalStorage(props);
  }

  //toggle button
  const handleFormBtnClick = () => {
    setFormActive(!isFormActive);
  }

  return (
    <div id="form-container">
      <div className={isFormActive ? "activeForm": "form"}>
      <form className="flexbox" onSubmit={handleSubmit}>
        <Search
          address={address}
          handleSelect={handleSelect}
          handleChange={handleSearchChange}
        />
        <div className="label-input">
          <label>Since</label>
          <input
            name="start"
            type="date"
            value={start}
            onChange={handleChange}
            required={true}
          ></input>
        </div>
        <div className="label-input">
          <label>Till</label>
          <input
            name="end"
            type="date"
            value={end}
            onChange={handleChange}
            required={true}
          ></input>
        </div>
        <button id="submit-button" type="submit">
          Submit
        </button>
        <button id="clear-button" type="button" onClick={handleClear}>
          Clear
        </button>
        <p className="copy-mark">&copy; IGLOBE 2020</p>
      </form>
      </div>
      <div className="form-btn">
      {!isFormActive?
      <i className="fab fa-wpforms" onClick={handleFormBtnClick}></i>:
        <i className="fas fa-times-circle" onClick={handleFormBtnClick}></i>}
      </div>
    </div>
  );
}

export default Form;
