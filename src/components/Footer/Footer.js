import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-justify p-5 footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <h1 className="serviceName">Follow me</h1>
                            <a className="socialLink" target={null} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon icon={faYoutube} /> YouTube</a>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription">#Khilkhet/Dhaka,road-12,Streat-Tetultala,House No.- ka/125</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> Email : mdanishour@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> Phone : 0143663313</p>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/about">About Me</Link><br/>
                            <Link className="footerLink" to="/contact">Contact Me</Link>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h1 className="serviceName">Legal</h1>
                            <Link className="footerLink" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/terms">Terms & Conditions</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">Rafi.com &copy; 2021-2022</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;