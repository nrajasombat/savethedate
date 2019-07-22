import React from 'react';
import '../style/Timeline.scss';

const Timeline = ({ title }) => {
  return (
    <div className="timeline">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <section id="cd-timeline" class="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture"></div>

              <div className="cd-timeline-content">
                <h2>Penta Consulting</h2>
                <p>
                  Working alongside the designer team implementing the designs,
                  also developing custom solutions to address team necessities.
                </p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div className="cd-timeline-content">
                <h2>Title of section 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, optio, dolorum provident rerum aut hic quasi placeat
                  iure tempora laudantium ipsa ad debitis unde?
                </p>
                <span className="cd-date">Jan 18</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture"></div>

              <div className="cd-timeline-content">
                <h2>Title of section 3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Excepturi, obcaecati, quisquam id molestias eaque asperiores
                  voluptatibus cupiditate error assumenda delectus odit
                  similique earum voluptatem doloremque dolorem ipsam quae rerum
                  quis. Odit, itaque, deserunt corporis vero ipsum nisi eius
                  odio natus ullam provident pariatur temporibus quia eos
                  repellat consequuntur perferendis enim amet quae quasi
                  repudiandae sed quod veniam dolore possimus rem voluptatum
                  eveniet eligendi quis fugiat aliquam sunt similique aut
                  adipisci.
                </p>
                <div className="cd-date">Jan 24</div>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>

              <div className="cd-timeline-content">
                <h2>Title of section 4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, optio, dolorum provident rerum aut hic quasi placeat
                  iure tempora laudantium ipsa ad debitis unde? Iste
                  voluptatibus minus veritatis qui ut.
                </p>
                <span className="cd-date">Feb 14</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>

              <div className="cd-timeline-content">
                <h2>Title of section 5</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, optio, dolorum provident rerum.
                </p>
                <span className="cd-date">Feb 18</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>

              <div class="cd-timeline-content">
                <h2>Final Section</h2>
                <p>This is the content of the last section</p>
                <span class="cd-date">Feb 26</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
