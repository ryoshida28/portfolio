import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import headshot from '../images/headshot.jpg';

import '../sass/routes/home.scss';

export default class Home extends Component {
    render() {
        return (
            <Container className="hero-banner" fluid>
                <section className="hero-wrapper">
                    <Row>
                        <Col xl={3} lg={12} md={12} sm={12} xs={12}>
                            <div className="img-wrapper d-flex flex-column mx-auto align-content-center">
                                <img src={headshot} alt="Ryan Yoshida" className="img mx-auto" />
                                <Row className="justify-content-center my-3 social-links">
                                    <Col className="text-center">
                                        <a href="https://github.com/ryoshida28" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href="https://www.linkedin.com/in/ryan-yoshida/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    </Col>
                                    <Col className="text-center">
                                        <a href="mailto:ryan.yoshida@comcast.net" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="px-2" xl={9} lg={12} md={12} sm={12} xs={12}>
                            <h2 className="display-4">Ryan Yoshida</h2>
                            <hr />
                            <ul>
                                <li>B.S. Computer Science and Engineering @ UCI</li>
                                <li><a className="banner-text-link" href="https://acm-uci.org" target="_blank" rel="noopener noreferrer">ACM@UCI</a> Lead Web Developer</li>
                                <li><a className="banner-text-link" href="https://icehockeyclubuci.wixsite.com/uci-ice-hockey" target="_blank" rel="noopener noreferrer">UCI Ice Hockey</a> Board Member</li>
                                <li><a className="banner-text-link" href="https://www.blackhawks.org/" target="_blank" rel="noopener noreferrer">Santa Clara Blackhawks</a> U10 Assistant Coach</li>
                            </ul>
                            <p>
                                I am currently a Junior at the University of California Irvine studying Computer Science and Engineering. I have varied interests in the topics of Software Engineering and Embedded Systems and am currently seeking an internship position in either of those fields. At UCI I am the Webmaster for ACM@UCI where I am responsible for maintaining and updating the club website.
                            </p>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mt-4">
                        <Col className="my-2" xl={4} lg={4} md={6} sm={6} xs={12}>
                            <Link to="/projects" className="banner-a">
                                <div className="banner-link">
                                    <h5>Projects</h5>
                                    <p>See a selection of my projects</p>
                                </div>
                            </Link>
                        </Col>
                        <Col className="my-2" xl={4} lg={4} md={6} sm={6} xs={12}>
                            <Link to="/competitive_programming" className="banner-a">
                                <div className="banner-link">
                                    <h5>Competitive Programming</h5>
                                    <p>A collection of my work in competitive programming</p>
                                </div>
                            </Link>
                        </Col>
                        <Col className="my-2" xl={4} lg={4} md={6} sm={6} xs={12}>
                            <Link to="/resume" className="banner-a">
                                <div className="banner-link">
                                    <h5>Resume</h5>
                                    <p>View/Download my Resume</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </section>
            </Container>
        )
    }
}
