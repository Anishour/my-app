import React, { Component, Fragment } from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                        <img src="https://us.123rf.com/450wm/aurielaki/aurielaki1806/aurielaki180600044/103781288-order-online-shopping-concept-customer-character-with-gift-mobile-pay-with-credit-card-can-use-for-w.jpg?ver=6" />

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazzar</h2>
                            <p className="serviceDescription"> developmet services.Any kinds of softwere developmet I do.I am Rafi, All the best, I know about full stack web developmet services.Any kinds of softwere developmet I do</p>
                            <ul>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                                <li className="serviceDescription">Any kinds of softwere developmet I do.</li>
                            </ul>
                            <Button variant="primary">Any kinds</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;