import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Footer from '../Footer';
import moment from 'moment';
import '/Users/sarahdonoghue/Documents/Projects/wellness-events-app/assets/scss/style.scss';

const propTypes = {
  buttonText: PropTypes.string,
  eventbriteApiKey: PropTypes.string,
  eventbriteLink: PropTypes.string,
  eventId: PropTypes.string,
  friendsLabel: PropTypes.string,
  widerNetworkLabel: PropTypes.string,
}

const defaultProps = {
  buttonText: 'Book Now',
  eventbriteApiKey: 'E3FPRWVRIRN63ML427UJ',
  eventbriteLink: 'https://www.eventbriteapi.com/v3/events/',
  friendsLabel: 'Your Friends who are attending the event',
  widerNetworkLabel: 'People you may know who are attending the event',
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
    // this.fetchFriends();
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

  // fetchFriends = () => {
      // Similar to the fetchEventData function above I would use this function to fetch data from facebook api using the event id to gain access to their facebook friends to see if any are attending the events. 
      // Additionally, I would to gain access to their suggested friends to see if they are also attending the event.
      // I would store the friends data in an array and then map over so I could display each profile picture of the person attending/ineterested in the event
  // }


  render() {
    const { buttonText, friendsLabel, widerNetworkLabel } = this.props;
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
      <React.Fragment>
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
              <div className="EventDetails_friendsContainer">
                <div className="EventDetails_friendsContent">
                  <div className="EventDetails_friendTitle">
                    {friendsLabel}
                  </div>
                  <ul className="EventDetails_friendList">
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                  </ul>
                </div>
                <div className="EventDetails_friendsContent">
                <div className="EventDetails_friendTitle">
                    {widerNetworkLabel}
                  </div>
                  <ul className="EventDetails_friendList">
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                    <li className="EventDetails_friendProfile"></li>
                  </ul>
                </div>
              </div>
            </div>
              </>
          )}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default EventDetails;