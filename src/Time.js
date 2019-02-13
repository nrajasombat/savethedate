import React, { Component } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import './Time.scss';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }
  render() {
    return (
      <div className="countdown">
        <Row>
          <span className="count">
            {this.leading0(this.state.days)}
            <div>Days</div>
          </span>
          <span className="count">
            {this.leading0(this.state.hours)}
            <div>Hours</div>
          </span>
          <span className="count">
            {this.leading0(this.state.minutes)}
            <div>Minutes</div>
          </span>
          <span className="count">
            {this.leading0(this.state.seconds)}
            <div>Seconds</div>
          </span>
        </Row>
      </div>
    );
  }
}
export default Time;
