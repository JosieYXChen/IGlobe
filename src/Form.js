import React from 'react'
import './Form.css'

const Form = props => {
  return (
    <div id="navigation">
      <form className="flexbox">
        <div className="label-input">
          <label>Place</label>
          <input name="place" type="text"></input>
        </div>
        <div className="label-input">
          <label>Since</label>
          <input name="start" type="date"></input>
        </div>
        <div className="label-input">
          <label>Till</label>
          <input name="end" type="date"></input>
        </div>
        <div className="label-input">
          <label>Latitude</label>
          <input name="latitude" type="number" step="0.01"></input>
        </div>
        <div className="label-input">
          <label>Longitude</label>
          <input name="longitude" type="number" step="0.01"></input>
        </div>
        <button id="submit-button" type="submit">
          Submit
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; IGlobe 2020</p>
      </form>
    </div>
  );
};

export default Form
