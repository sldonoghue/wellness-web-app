import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ImageSplit from './ImageSplit';

const propTypes = exact({
  pageTitle: PropTypes.string,
  subtext: PropTypes.string,
  title: PropTypes.string,
})

const defaultProps = {
  introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim leo, fringilla non ornare nec, feugiat a mi. Nullam vehicula purus ut tellus semper iaculis. Sed congue ornare justo et porta. Morbi finibus arcu diam, nec porttitor quam interdum vel. Cras ut finibus mauris. Praesent id blandit ex. Aenean finibus consequat erat, a elementum ligula feugiat eu.',
  pageTitle: 'Page Title',
  subtext: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  title: "Test Title",
}


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.scrollTo = React.createRef();
  }

  handleJumpLink = () => {
    debugger
    this.scrollTo.current.scrollIntoView({behavior: 'smooth', block: 'start'}, 0);
  }

  handlePageClick = () => {
    debugger
  }

  render() {
    const { introText, pageTitle, subtext, title } = this.props;

    return (
      <div className="Homepage">
        <div className="Homepage_container">
          <div className="Homepage_heroImage" />
          <div className="Homepage_content">
            <h1 className="Homepage_bannerTitle">
              {title}
            </h1>
            <div className="Homepage_subtext">
              {subtext}
            </div>
            <button className="Homepage_jumpLink" onClick={this.handleJumpLink} />
          </div>
        </div>
        <div className="Homepage_section" ref={this.scrollTo}>
          <div className="Homepage_sectionContent">
            <h2 className="Homepage_pageTitle">
              {pageTitle}
            </h2>
            <div className="Homepage_text">
              {introText}
            </div>
          </div>
          <ImageSplit 
            handlePageClick={this.handlePageClick}
          />
        </div>
      </div>
    )
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;