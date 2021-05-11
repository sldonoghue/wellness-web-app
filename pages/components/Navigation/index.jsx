import exact from 'prop-types-exact';
import React from 'react';

import Link from 'next/link';

function Navigation(props) {
  return(
    <div className="Navigation">
      <div className="Navigation_container">
        <div className="Navigation_content">
            {/* Add title to link  */}
            <Link href='/'> 
              <a className="Navigation_link">
                Wellness App
              </a>
            </Link>
        </div>
        <div className="Navigation_content">
          <div className="Navigation_link">
            Events
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;