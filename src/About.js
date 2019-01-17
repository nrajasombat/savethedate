/**
 * Created by tharajasombat on 1/16/19.
 */
import React, {Component} from 'react';
import './App.css';
import Section from './Section'
import Header from './Header'
import thapic from "./Tha.png"
import vupic from "./Vu.png"
import {Col} from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <div class="about">
                <Header/>
                <Section/>
                <div className="container">
                    <Col md={6} md={6}>
                        <img src={vupic} alt class="main-img img-responsive img-circle"></img>
                        <h4 class="text-ornament">Vu</h4>
                        <h6 class="main-subheader">Chubby Wiener</h6>
                        <p>
                            Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra
                            elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit uasi quidem minus id iprum omnis.
                            Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                        </p>
                        <div class="social-media smaller">
                            <a href="#" title=""><i class="fab fa-twitter"></i></a>
                            <a href="#" title=""><i class="fab fa-facebook"></i></a>
                            <a href="#" title=""><i class="fab fa-linkedin"></i></a>
                            <a href="#" title=""><i class="fab fa-pinterest"></i></a>
                            <a href="#" title=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </Col>
                    <Col md={6} md={6}>
                        <img src={thapic} alt class="main-img img-responsive img-circle"></img>

                        <h4 class="text-ornament">Tha</h4>
                        <h6 class="main-subheader">Badass Woman</h6>
                        <p>
                            Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra
                            elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit uasi quidem minus id iprum omnis.
                            Lorem ipsum dolor Phas ellus ac sodales felis tiam.
                        </p>
                        <div class="social-media smaller">
                            <a href="#" title=""><i class="fab fa-twitter"></i></a>
                            <a href="#" title=""><i class="fab fa-facebook"></i></a>
                            <a href="#" title=""><i class="fab fa-linkedin"></i></a>
                            <a href="#" title=""><i class="fab fa-pinterest"></i></a>
                            <a href="#" title=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </Col>
                </div>
            </div>
        );
    }
}

export default About;
