import React, { Component ,Fragment} from 'react';
import { Col, Container, Row, Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="RecentProjectCard">
                        <Card.Img variant="top" src="https://us.123rf.com/450wm/aurielaki/aurielaki1806/aurielaki180600044/103781288-order-online-shopping-concept-customer-character-with-gift-mobile-pay-with-credit-card-can-use-for-w.jpg?ver=6" />
                        <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="RecentProjectCard">
                        <Card.Img variant="top" src="https://us.123rf.com/450wm/aurielaki/aurielaki1806/aurielaki180600044/103781288-order-online-shopping-concept-customer-character-with-gift-mobile-pay-with-credit-card-can-use-for-w.jpg?ver=6" />
                        <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="p-2">
                        <Card className="RecentProjectCard">
                        <Card.Img variant="top" src="https://us.123rf.com/450wm/aurielaki/aurielaki1806/aurielaki180600044/103781288-order-online-shopping-concept-customer-character-with-gift-mobile-pay-with-credit-card-can-use-for-w.jpg?ver=6" />
                        <Card.Body>
                        <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to="/project">Details</Link></Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default RecentProjects;