import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                  <h1 className="serviceMainTitle">Our Courses</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="p-2">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg"/>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="text-justify">
                                <h5 className="courseTitle">Web Development</h5>
                                <p className="courseDes">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/CourseDetails" className="courseDetails">Details</Link>
                            </Col>
                        </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">

                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg"/>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="text-justify">
                                <h5 className="courseTitle">Web Development</h5>
                                <p className="courseDes">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/CourseDetails" className="courseDetails">Details</Link>
                            </Col>
                        </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">

                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg"/>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="text-justify">
                                <h5 className="courseTitle">Web Development</h5>
                                <p className="courseDes">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/CourseDetails" className="courseDetails">Details</Link>
                            </Col>
                        </Row>

                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">

                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="courseImg" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_960_720.jpg"/>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="text-justify">
                                <h5 className="courseTitle">Web Development</h5>
                                <p className="courseDes">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <Link to="/CourseDetails" className="courseDetails">Details</Link>
                            </Col>
                        </Row>

                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;