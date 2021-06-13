import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Player,BigPlayButton} from 'video-react'
import quran from '../../asset/image/qoran.mp3'

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContantCourse">
                            <Row>
                                
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="CourseFullTitle">Our systems have detected unusual traffic</h3>
                                    <h5 className="CourseSubTitle">Total Lecture=30</h5>
                                    <h5 className="CourseSubTitle">Total Student=30</h5>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <p className="CourseDes">Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robOur systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a rob</p>
                                </Col>


                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                    <Row>

                        <Col sm={12} md={6} lg={6}>
                            <h1 className="serviceName">How I Work</h1>
                            <ul>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                                <li className="serviceDescription">Requirement Gathering</li>
                            </ul>
                            <Button variant="primary">Buy now</Button>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src={quran} />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>

                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default CourseDetails;