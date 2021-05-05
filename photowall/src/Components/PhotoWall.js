import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// anchor tag, href attribute
function PhotoWall(props) {
  return (
    <div>
      <Link to="/AddPhoto" className="add-icon"></Link>
      <div className="photo-grid">
        {props.posts
          .sort(function(x,y) {
            return y.id - x.id; // sort the posts
          })
          .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
      </div>
    </div>
  )
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PhotoWall
