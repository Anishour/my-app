import React, { Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import anish_git from '../../asset/image/anish_git.jpg'
import nabila from '../../asset/image/Afrose.png'
import rafi from '../../asset/image/Rafi.png'


class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed: 1000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 2000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Client Says</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={rafi}/>
                                    <h1 className="serviceName">Web Design & Web Development</h1>
                                    <p className="serviceDescription">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={nabila}/>
                                    <h1 className="serviceName">Mobile App Development</h1>
                                    <p className="serviceDescription">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src={anish_git}/>
                                    <h1 className="serviceName">Graphics Design & Illustration</h1>
                                    <p className="serviceDescription">and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;