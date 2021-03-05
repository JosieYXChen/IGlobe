import firebase from 'firebase';

export const dateDiff = (dateStr1, dateStr2) => {
  const [year1, month1, day1] = dateStr1
    .split('-')
    .map(numStr => Number(numStr));
  const [year2, month2, day2] = dateStr2
    .split('-')
    .map(numStr => Number(numStr));
  const firstDate = new Date(year1, month1, day1);
  const secondDate = new Date(year2, month2, day2);
  const diffDays = Math.round(secondDate - firstDate) / (24 * 60 * 60 * 1000);
  return (diffDays / 365).toFixed(2);
};

export const updateDataBase = (newPlace) => {
  let newKey = 0;
  const userId = firebase.auth().currentUser.uid;
  const rootRef = firebase.database().ref('/users/' + userId + '/places');
  rootRef.on(
    'value',
    snapshot => {
      newKey = +snapshot.numChildren();
    },
    error => console.log(error)
  );
  const updates = {};
  updates['/places/' + newKey] = newPlace;

  firebase.database().ref('/users/' + userId).update(updates);
}

export const updateLocalStorage = (props) => {
  window.localStorage.setItem('places', JSON.stringify(props.places))
  props.setPlaceNum(props.places.length)
}

export const clearLocalStorage = () => {
  window.localStorage.clear();
}

// sign out
export const handleSignOut = (props) => {
  firebase.auth().signOut().then(() => {
    // props.setIsSignedIn(false);
  }).catch((error) => console.log('failed to log out', error));
}
