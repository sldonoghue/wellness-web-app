import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import moment from 'moment';

const propTypes = {
  items: PropTypes.array,
}

class EventsResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return ( 
      <ul className="EventsResults_list">
        {items.map((item, index) => (
          <li className="EventsResults_card" key={index}>
            <a href={item.url} target="_blank">
              <div className="EventsResults_imageContainer">
                {item.logo != null
                  && (
                    <figure className="EventsResults_image" style={{backgroundImage: `url(${item.logo.url})`}} />
                  )
                }
              </div>
              <div className="EventsResults_textContent">
                <div className="EventsResults_title">
                  {item.name.text}
                </div>
                <div className="EventsResults_summary">
                  {item.summary}
                </div>
                <div className="EventsResults_details">
                  <div className="EventsResults_date">
                    {`DATE: ${moment(item.start.local).format('DD/MM/YYYY')}`}
                  </div>
                  {item.is_free === true
                    && (
                      <div className="EventsResults_price">
                        FREE
                      </div>
                    )
                  }
                  {item.is_free === false
                    && (
                      <div className="EventsResults_price">
                        £££
                      </div>
                    )
                  }
                </div>
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