import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  items: PropTypes.array,
}

class EventsResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    debugger

    return ( 
      <ul className="EventsResults">
        {items.map((item, index) => (
          <li className="EventsResults_card" key={index}>
            <a href={item.url} target="_blank">
              <div className="EventsResults_imageContainer">
                {/* <figure className="EventsResults_image" style={{backgroundImage: `url(${item.logo.url})`}} /> */}
              </div>
              <div className="EventsResults_textConent">
                <div className="EventsResults_title">
                  {item.name}
                </div>
                <div className="EventsResults_summary">
                  {item.summary}
                </div>
                <div className="EventsResults_date">
                  {item.start.local}
                </div>
                {item.is_free === true
                  && (
                    <div className="EventsResults_price">
                      FREE
                    </div>
                  )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

EventsResults.propTypes = propTypes

export default EventsResults;