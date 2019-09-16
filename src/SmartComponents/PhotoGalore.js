import React, { Component } from 'react';
import './PhotoGalore.scss';
import { Col, Button } from 'react-bootstrap';
import Pics from './Pics';
import Footer from '../components/Footer';
import PreWedding from './PreWedding';

class PhotoGalore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  toggle(index) {
    this.setState({
      current: index,
    });
  }
  render() {
    return (
      <div className="photo-galore">
        <div className="container">
          <h2>{this.props.title}</h2>
          <div className="heart" />
          <Col md={12}>
            <ul className="nav-tab">
              <div className="attend-btn">
                <a onClick={this.toggle.bind(this, 1)}>
                  <Button className="engagement">Engagement</Button>
                </a>
                <a onClick={this.toggle.bind(this, 2)}>
                  <Button className="pre-wedding">Pre-Wedding</Button>
                </a>
                <div
                  className={`collapsible ${
                    this.state.current === 1 ? 'open ' : ''
                  }`}
                >
                  <Pics />
                </div>
              </div>

              <div
                className={`collapsible ${
                  this.state.current === 2 ? 'open ' : ''
                }`}
              >
                <PreWedding />
              </div>
            </ul>
          </Col>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PhotoGalore;
