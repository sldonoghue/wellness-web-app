import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

const propTypes = {
  title: PropTypes.string,
}

const defaultProps = {
  title: 'Find an event...'
}

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return(
      <React.Fragment>
        <div className="Events">
        <Navigation />
          <div className="Events_bannerContainer">
            <div className="Events_heroImage" />
            <div className="Events_content">
              <h1 className="Events_bannerTitle">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;