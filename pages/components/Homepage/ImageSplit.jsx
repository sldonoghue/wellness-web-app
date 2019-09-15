import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Atoms/Button';

import Link from 'next/link';

const propTypes = {
  buttonText: PropTypes.string,
  handlePageClick: PropTypes.func.isRequired,
  heading: PropTypes.string,
  innerText: PropTypes.string,
  image: PropTypes.string,
}

const defaultProps = {
  buttonText: 'Find an event',
  heading: 'Find an Event',
  innerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam enim leo, fringilla non ornare nec, feugiat a mi. Nullam vehicula purus ut tellus semper iaculis. Sed congue ornare justo et porta. Morbi finibus arcu diam, nec porttitor quam interdum vel. Cras ut finibus mauris. Praesent id blandit ex. Aenean finibus consequat erat, a elementum ligula feugiat eu.',
}

function ImageSplit(props) {

  const { buttonText, handlePageClick, heading, innerText } = props;

  return(
    <div className="ImageSplit">
      <div className="ImageSplit_container">
        <div className="ImageSplit_item ImageSplit_textContainer">
          <h2 className="ImageSplit_title">
            {heading}
          </h2>
          <div className="ImageSplit_innerText">
            {innerText}
          </div>
          <div className="ImageSplit_actions">
            <Link href='/events'>
              <a className="Button ImageSplit_button">
                {buttonText}
              </a>
            </Link>
          </div>
        </div>
        <div className="ImageSplit_item">
          <div className='ImageSplit_image' />
        </div>
      </div>
    </div>
  )
}

ImageSplit.propTypes = propTypes;
ImageSplit.defaultProps = defaultProps;

export default ImageSplit;