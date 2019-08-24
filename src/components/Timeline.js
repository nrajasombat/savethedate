import React from 'react';
import './Timeline.scss';
import Footer from './Footer';

const Timeline = ({ title }) => {
  return (
    <div className="timeline">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <section id="cd-timeline" class="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
                <div className="minihearts">
                  <i class="fa fa-heart"></i>
                </div>
              </div>

              <div className="cd-timeline-content">
                <h2>First time we met</h2>
                <h6>November 18, 2012</h6>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
                <div className="minihearts">
                  <i class="fab fa-facebook"></i>
                </div>
              </div>

              <div className="cd-timeline-content">
                <h2>Facebook Official</h2>
                <h6>May 15, 2013</h6>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
                <div className="minihearts">
                  <i class="fas fa-home"></i>
                </div>
              </div>

              <div className="cd-timeline-content">
                <h2>Moving In</h2>
                <h6>April 3, 2014</h6>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location">
                <div className="minihearts">
                  <i class="fas fa-ring"></i>
                </div>
              </div>

              <div className="cd-timeline-content">
                <h2>The Proposal</h2>
                <h6>September 17, 2016</h6>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location">
                <div className="minihearts">
                  <i class="fas fa-plane-departure"></i>
                </div>
              </div>

              <div className="cd-timeline-content">
                <h2>Exploring the world together...</h2>
                <h6>December 18, 2016 </h6>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
                <div className="minihearts">
                  <i class="fas fa-dove"></i>
                </div>
              </div>

              <div class="cd-timeline-content">
                <h2>Getting married.</h2>
                <h6>October 26, 2019</h6>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
