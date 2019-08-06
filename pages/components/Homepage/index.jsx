import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = exact({
  title: PropTypes.string,
})

const defaultProps = {
  title: "Test Title",
}


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <h1 className="Homepage">
        {title}
      </h1>
    )
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;