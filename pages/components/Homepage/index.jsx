import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = exact({
  pageTitle: PropTypes.string,
  subtext: PropTypes.string,
  title: PropTypes.string,
})

const defaultProps = {
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

  render() {
    const { pageTitle, subtext, title } = this.props;

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
          <h2 className="Homepage_pageTitle">
            {pageTitle}
          </h2>
        </div>
      </div >
    )
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;