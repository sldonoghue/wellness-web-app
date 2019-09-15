import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

// https://react-day-picker.js.org/examples/selected-range-enter
const propTypes = {
  dateLabel: PropTypes.string,
  locationLabel: PropTypes.string,
  searchButtonText: PropTypes.string,
}

const defaultProps = {
  dateLabel: 'When',
  locationLabel: 'City',
  searchButtonText: 'Search',

}

class EventSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDatePicker: false,
      city: '',
      locationValue: '',
      enteredTo: null,
      from: null,
      selectedDates: 'Anytime',
      to: null,
    }
  }


  handleSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }


  handleDayClick = (day) => {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (this.handleSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
        selectedDates: `${moment(from).format('DD/MM/YYYY')} - ${moment(day).format('DD/MM/YYYY')}`,
      });
    }
  }


  handleDayMouseEnter = (day) => {
    let  { from, to } = this.state;
    if (!this.handleSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }


  handleResetClick = () => {
    const { enteredTo, to, from } = this.state;
    this.setState({
      enteredTo: null,
      from: null,
      to: null,
    });
  }
 

  handleDatePicker = () => {
    const { activeDatePicker } = this.state;

    this.setState({ activeDatePicker: !activeDatePicker})
  }


  handleLocationChange = (locationValue) => {
    this.setState({ locationValue });
  };
 

  handleSelect = (locationValue) => {
    geocodeByAddress(locationValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  render() {

    const { dateLabel, locationLabel, searchButtonText } = this.props;
    const { activeDatePicker, enteredTo, from, locationValue, selectedDates, to } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: from };
    const selectedDays = [from, { from, to: enteredTo }];

    return (
      <div className="EventSearch">
        <div className="EventSearch_container">
          <div className="EventSearch_searchBar">
            <div className="EventSearch_searchFilter" onClick={this.handleDatePicker}>
              <div className="EventSearch_label">
                {dateLabel}
              </div>
              <div className="EventSearch_value">
                {selectedDates}
              </div>
            </div>
            <div className={activeDatePicker ? 'EventSearch_datePicker EventSearch_datePicker-active' : 'EventSearch_datePicker'}>
              <DayPicker
                className="EventSearch_date"
                numberOfMonths={2}
                fromMonth={from}
                selectedDays={selectedDays}
                disabledDays={disabledDays}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                onDayMouseEnter={this.handleDayMouseEnter}
              />
            </div>
           
            <div className="EventSearch_searchFilter">
              <div className="EventSearch_label">
                {locationLabel}
              </div>
              {/* <ReactDependentScript
                scripts={['https://maps.googleapis.com/maps/api/js?key=AIzaSyABNyDuLYeflwYvxCwU9CqTu1z3OH1ZYOQ&libraries=places']}
              > */}
                {/* <PlacesAutocomplete
                  value={locationValue}
                  onChange={this.handleLocationChange}
                  onSelect={this.handleLocationSelect}
                >
                {({ getInputProps, suggestions, getSuggestionItemsProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Anywhere',
                        className: 'EventSearch_value',
                      })}
                    />
                    <div className="EventSearch_locationContainer">
                      {loading && <div> Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active ? 'EventSearch_suggestion EventSearch_suggestion-active' : 'EventSearch_suggestion';
                        //Inline style to be changed
                        const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemsProps(suggestion, {className, style})}
                          >
                            <span>
                              {suggestion.description}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                </PlacesAutocomplete> */}
                {/* </ReactDependentScript> */}
            </div>
            <div className="EventSearch_action">
              <button type="button" className="EventSearch_button">
                {searchButtonText}
              </button>
            </div>
          </div>
        </div>
        <h1> Events Page</h1>
      </div>
    )
  }
}

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;

export default EventSearch;