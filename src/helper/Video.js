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
        <div className="names-text">
          <h1>
            Tha
            <span className="italic"> &amp; </span>
            Vu
          </h1>
          <h5 className="margin1 text-ornament">Are getting married</h5>
        </div>
      </div>
    </div>
  );
};

export default Video;
