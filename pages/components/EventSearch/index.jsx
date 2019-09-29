import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

import EventsResults from './EventsResults';

// https://react-day-picker.js.org/examples/selected-range-enter
const propTypes = {
  dateLabel: PropTypes.string,
  eventbriteApiKey: PropTypes.string,
  eventbriteLink: PropTypes.string,
  locationLabel: PropTypes.string,
  searchButtonText: PropTypes.string,
}

const defaultProps = {
  dateLabel: 'When',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/search/?',
  locationLabel: 'City',
  searchButtonText: 'Search',

}

class EventSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDatePicker: false,
      city: '',
      events: [],
      locationValue: '',
      enteredTo: null,
      from: null,
      latLng: null,
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


  handleCloseDatePicker = () => {
    this.setState({ activeDatePicker: false });
  }


  handleLocationChange = (locationValue) => {
    this.setState({ locationValue });
  };
 

  handleLocationSelect = (locationValue) => {
    let { latLng } = this.state;

    geocodeByAddress(locationValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng),
        this.setState({latLng})
      })
      .catch(error => console.error('Error', error));
      this.setState({ locationValue});
  };

  handleSearchEvents = () => {
    const { from, enteredTo, events, locationValue, latLng } = this.state;
    const { eventbriteApiKey, eventbriteLink } = this.props;

    if (!locationValue) return this.setState({requiredMessage: 'Please enter a location'});

    if (locationValue && from) {
      this.setState({requiredMessage: ''});

      const fromDate = moment(from).format('YYYY-MM-DD');
      const searchFromDate = `${fromDate}T00:00:01Z`;

      const toDate = moment(enteredTo).format('YYYY-MM-DD');
      const searchToDate = `${toDate}T00:00:01Z`;

      fetch(`${eventbriteLink}start_date.range_start=${searchFromDate}&start_date.range_end=${searchToDate}&location.longitude=${latLng.lng}&location.latitude=${latLng.lat}&categories=108&token=${eventbriteApiKey}`)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({events: data.events})
      })
      .catch(error => console.log('Error', error));
    }

    if(locationValue && !from) {
      const currentDate = moment().format('YYYY-MM-DD');
      const searchFromDate = `${currentDate}T00:00:01Z`;

      fetch(`${eventbriteLink}start_date.range_start=${searchFromDate}&location.longitude=${latLng.lng}&location.latitude=${latLng.lat}&categories=108&token=${eventbriteApiKey}`)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({events: data.events})
      })
      .catch(error => console.log('Error', error));
    }
  }

  render() {
    const { dateLabel, locationLabel, searchButtonText } = this.props;
    const { activeDatePicker, enteredTo, events, from, locationValue, requiredMessage, selectedDates, to, visibleItems } = this.state;
    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: from };
    const selectedDays = [from, { from, to: enteredTo }];
    const today = new Date();

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
                disabledDays={{before: today}}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                onDayMouseEnter={this.handleDayMouseEnter}
              />
            </div>
           
            <div className="EventSearch_searchFilter" onClick={this.handleCloseDatePicker}>
              <div className="EventSearch_label">
                {locationLabel}
              </div>

                <PlacesAutocomplete
                  value={locationValue}
                  onChange={this.handleLocationChange}
                  onSelect={this.handleLocationSelect}
                >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
                        const style = suggestion.active ? { backgroundColor: '#fafafa', cursor: 'pointer' } : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {className, style})}
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
                </PlacesAutocomplete>
                {requiredMessage != ''
                  && (
                    <div className="EventSearch_required">
                      {requiredMessage}
                    </div>
                  )}
            </div>
            <div className="EventSearch_action">
              <button type="button" className="Button EventSearch_button" onClick={this.handleSearchEvents}>
                {searchButtonText}
              </button>
            </div>
          </div>
        </div>
        <div className="EventSearch_resultsContainer">
          <>
            {events.length === 0
              && 
              (
                <h2 className="EventSearch_title">
                  Heading + Paragraph
                </h2>
              )
            }
            {events.length > 0
              && 
                (
                <>
                  <h2 className="eventSearch_title">
                    {`Wellness Events in ${locationValue}`}
                  </h2>
                  <EventsResults
                    items={events}
                  />
                </>
              )
            }
          </>
        </div>
      </div>
    )
  }
}

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;

export default EventSearch;