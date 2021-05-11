import exact from 'prop-types-exact';
import React from 'react';

function Footer(props) {

  return(
    <div className="Footer">
      <div className="Footer_container">
        <ul className="Footer_list">
          <li className="Footer_link">
            Home
          </li>
          <li className="Footer_link">
            Events
          </li>
          <li className="Footer_link">
            FAQs
          </li>
          <li className="Footer_link">
            Social 
          </li>
          <li className="Footer_link">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;