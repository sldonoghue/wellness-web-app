import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import moment from 'moment';
// TO Do: Figure out why I need to import stylesheet for this page?
import '/Users/sarahdonoghue/Documents/Projects/wellness-events-app/assets/scss/style.scss';
// import Arrow from '../../../assets/static/icons/arrow.png';

const propTypes = {
  buttonText: PropTypes.string,
  eventbriteApiKey: PropTypes.string,
  eventbriteLink: PropTypes.string,
  eventId: PropTypes.string,
}

const defaultProps = {
  buttonText: 'Book Now',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/',
}

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventData: [],
    }
  
  }

  componentDidMount() {
    this.fetchEventData();
  }


  fetchEventData = () => {
    const { eventbriteApiKey, eventbriteLink, eventId } = this.props;
    let { eventData } = this.state

    fetch(`${eventbriteLink}${eventId}/?expand=venue,ticket_classes,ticket_availability&token=${eventbriteApiKey}`)
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({eventData: [data]})
    })
    .catch(error => console.log('Error', error));
  }

  render() {
    const { buttonText } = this.props;
    const { eventData } = this.state;

    let eventPrice = '';
    
    if (eventData.length != 0) {
      if(eventData[0].ticket_availability.maximum_ticket_price.value === 0) {
        eventPrice = 'Free'
      } else {
        eventPrice = eventData[0].ticket_availability.maximum_ticket_price.display
      }
    }
    
    return (
      <div className="EventDetails">
      {eventData.length != 0
        && (
          <>
          <div className="EventDetails_imageContainer">
            {eventData[0].logo != null
              && (
                <figure className="EventDetails_image" style={{backgroundImage: `url(${eventData[0].logo.url})`}}/>
              )
            }
          </div>
          <div className="EventDetails_content">
            <h2 className="EventDetails_title">
              {eventData[0].name.text}
            </h2>
            <div className="EventDetails_eventInfo">
              <div className="EventDetails_info">
                <div className="EventDetails_time">
                  {`Start: ${moment(eventData[0].start.local).format('DD/MM/YYYY HH:mm')}`}
                </div>
                <div className="EventDetails_time">
                  {`End: ${moment(eventData[0].end.local).format('DD/MM/YYYY HH:mm')}`}
                </div>
              </div>
              <div className="EventDetails_info">
                <div className="EventDetails_address">
                  <span>{eventData[0].venue.address.address_1}</span>
                  <span>{eventData[0].venue.address.city}</span>
                  <span>{eventData[0].venue.address.postal_code}</span>
                </div>
              </div>
            </div>
            <div className="EventDetails_eventInfo">
              <div className="EventDetails_info">
                {eventData[0].capacity === null
                  && (
                    <div className="EventDetails_capacity">
                      Please register for the event
                    </div>
                  )
                }
                {eventData[0].capacity !== null
                  && (
                    <>
                      <div className="EventsDetails_capacity">
                        {`Number of tickets available:`}
                      </div>
                      <div className="EventsDetails_capacity">
                        {`Total number of tickets:`}
                      </div>
                    </>
                  )
                }
                <div className="EventDetails_price">
                  {eventPrice}
                </div>
              </div>
              <div className="EventDetails_actions">
                <a className="Button EventDetails_button" target="_blank" href={eventData[0].url}>
                  {buttonText}
                </a>
              </div>
            </div>
            <div className="EventDetails_description">
              {eventData[0].description.text}
            </div>
          </div>
            </>
        )}
    
      </div>
    )
  }
}

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default EventDetails;