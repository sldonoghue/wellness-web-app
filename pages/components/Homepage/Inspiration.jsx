import exact from 'prop-types-exact';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  blogPosts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

function Inspiration(props) {

  const { blogPosts, title } = props;

  return (
    <div className="Inspiration">
      <div className="Inspiration_container">
        <h2 className="Inspiration_title">
          {title}
        </h2>
        <div className="Inspiration_content">
          {blogPosts
            && (
              <>
                {blogPosts.slice(0, 9).map((item, index) => (
                  <div className="Inspiration_imageContainer">
                    <a className="Inspiration_image" href={item.image_permalink} target="_blank" style={{backgroundImage: `url(${item.photos[0].original_size.url})`}}/>
                  </div>
                ))}
              </>
            )}
        </div>
      </div>
    </div>
  )
}


Inspiration.propTypes = propTypes;

export default Inspiration;

