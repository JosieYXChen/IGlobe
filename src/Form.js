import React from 'react'
import './Form.css'
import firebase from 'firebase'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      place: '',
      latitude: '',
      longitude: '',
      start: '',
      end: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dateDiff = this.dateDiff.bind(this)
  }


  dateDiff(dateStr1, dateStr2){
    const [year1, month1, day1] = dateStr1.split('-').map(numStr => Number(numStr))
    const [year2, month2, day2] = dateStr2.split('-').map(numStr => Number(numStr))
    const firstDate = new Date(year1, month1, day1)
    const secondDate = new Date(year2, month2, day2)
    const diffDays = Math.round(secondDate - firstDate) / (24 * 60 * 60 * 1000);
    return (diffDays / 365).toFixed(2)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const years = this.dateDiff(event.target.start.value, event.target.end.value)
    const name = this.state.place
    const lat = Number(this.state.latitude)
    const lon = Number(this.state.longitude)

    const newPlace = {
      name,
      lat,
      lon,
      years,
    }
    let newKey = 0;

    const rootRef = firebase.database().ref().child('places')
    rootRef.on('value', (snapshot) => {
      newKey = +snapshot.numChildren()
    }, error => console.log(error))
    const updates = {};
    updates['/places/' + newKey ] = newPlace;

    firebase.database().ref().update(updates);

    this.setState({
      place: '',
      latitude: '',
      longitude: '',
      start: '',
      end: ''
    })

    return
  }

  render() {
    const { place, start, end, latitude, longitude} = this.state
    return (
      <div id="navigation">
        <form className="flexbox" onSubmit={this.handleSubmit}>
          <div className="label-input">
            <label>Place</label>
            <input name="place" type="text" value={place} onChange={this.handleChange}></input>
          </div>
          <div className="label-input">
            <label>Since</label>
            <input name="start" type="date" value={start} onChange={this.handleChange}></input>
          </div>
          <div className="label-input">
            <label>Till</label>
            <input name="end" type="date" value={end} onChange={this.handleChange}></input>
          </div>
          <div className="label-input">
            <label>Latitude</label>
            <input name="latitude" type="number" step="0.01" value={latitude} onChange={this.handleChange}></input>
          </div>
          <div className="label-input">
            <label>Longitude</label>
            <input name="longitude" type="number" step="0.01" value={longitude} onChange={this.handleChange}></input>
          </div>
          <button id="submit-button" type="submit">
            Submit
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; IGlobe 2020</p>
        </form>
      </div>
    );
  }
};

export default Form
