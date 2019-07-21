import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Timeline = ({ title }) => {
  return (
    <div className="timeline">
      <div className="container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="heart" />
          <Row>
            <Col md={12}>
              <div class="timeline">
                <div class="container left">
                  <div class="content">
                    <h2>2017</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>2016</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
                <div class="container left">
                  <div class="content">
                    <h2>2015</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>2012</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
                <div class="container left">
                  <div class="content">
                    <h2>2011</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
                <div class="container right">
                  <div class="content">
                    <h2>2007</h2>
                    <p>
                      Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
                      nec admodum perfecto mnesarchum, vim ea mazim fierent
                      detracto. Ea quis iuvaret expetendis his, te elit voluptua
                      dignissim per, habeo iusto primis ea eam.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
