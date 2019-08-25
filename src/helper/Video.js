import React, { useEffect } from 'react';
import './Video.scss';
import { Button } from 'react-bootstrap';

const Video = () => {
  useEffect(() => {
    document.getElementById('myVideo').play();
  });
  return (
    <div className="video-page">
      <div className="container">
        <audio src="/sundayMorning.mp3" autoPlay>
          Error: your web browser does not support this audio player.
        </audio>

        <div class="videoWrapper">
          <video autoplay loop id="myVideo">
            <source src="/snipit2.mp4" type="video/mp4" />
          </video>
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
      <a href="#weddingdate">
        <Button>More Info</Button>
      </a>
    </div>
  );
};

export default Video;
