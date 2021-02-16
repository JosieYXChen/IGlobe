import React from 'react';
import './Search.css'
import PlacesAutocomplete from 'react-places-autocomplete';

const Search = (props) => {
  const {address, handleChange, handleSelect} = props
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="label-input">
          <input
            {...getInputProps({
              placeholder: 'Places You Have Been To...',
              className: 'location-search-input',
            })}
            required={true}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, id) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              return (
                <div
                  key={`suggestion${id}`}
                  {...getSuggestionItemProps(suggestion, {
                    className
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default Search;
