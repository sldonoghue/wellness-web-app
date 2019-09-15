import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  dateLabel: PropTypes.string,
  locationLabel: PropTypes.string,
}

const defaultProps = {
  dateLabel: 'When',
  locationLabel: 'From'
}

class EventSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: '',
      location: '',
      startDate: '',
    }
  }

  render() {

    const {dateLabel, locationLabel} = this.props;

    return (
      <div className="EventSearch">
        <div className="EventSearch_container">
          <div className="EventSearch_searchBar">
            <div className="EventSearch_searchFilter">
              <div className="EventSearch_label">
                {locationLabel}
              </div>
              <div className="EventSearch_value">
              </div>
            </div>
            <div className="EventSearch_searchFilter">
              <div className="EventSearch_label">
                {dateLabel}
              </div>
              <div className="EventSearch_value">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

EventSearch.propTypes = propTypes;
EventSearch.defaultProps = defaultProps;

export default EventSearch;