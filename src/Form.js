import React from 'react'
import './Form.css'
import firebase from 'firebase'
import Search from './Search'
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      address: '',
      latitude: '',
      longitude: '',
      start: '',
      end: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dateDiff = this.dateDiff.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
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

  handleSearchChange(address){
    this.setState({ address });
  }

  handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address)
      const fullAddress = results[0].formatted_address;
      const {lat, lng} = await getLatLng(results[0]);
      this.setState({
        address: fullAddress,
        latitude: lat,
        longitude: lng
      })
    } catch (err) {
      console.error('Error', err)
    }
  };

  handleSubmit(event){
    event.preventDefault();
    const years = this.dateDiff(event.target.start.value, event.target.end.value)
    const name = this.state.address.split(',')[0];
    const lat = Number(this.state.latitude)
    const lng = Number(this.state.longitude)

    const newPlace = {
      name,
      lat,
      lng,
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
      address: '',
      latitude: '',
      longitude: '',
      start: '',
      end: ''
    })
    return
  }

  render() {
    const { address, start, end} = this.state
    return (
      <div id="navigation">
        <form className="flexbox" onSubmit={this.handleSubmit}>
          <Search address={address} handleSelect={this.handleSelect} handleChange={this.handleSearchChange}/>
          <div className="label-input">
            <label>S i n c e</label>
            <input name="start" type="date" value={start} onChange={this.handleChange}></input>
          </div>
          <div className="label-input">
            <label>T i l l</label>
            <input name="end" type="date" value={end} onChange={this.handleChange}></input>
          </div>
          <button id="submit-button" type="submit">
            S u b m i t
          </button>
          <p className="copy-mark">&copy; IGLOBE 2020</p>
        </form>
      </div>
    );
  }
};

export default Form
