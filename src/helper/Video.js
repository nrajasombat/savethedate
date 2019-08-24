import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <div className="video-page">
      <div className="container">
        <div class="videoWrapper">
          <iframe
            src="https://player.vimeo.com/video/355676019?
            background=1&autoplay=1&loop=1&byline=0&title=0"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
