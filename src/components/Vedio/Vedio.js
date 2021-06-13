import React, { Component, Fragment } from 'react';
import { Container, Row ,Col, Modal,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react'
import quran from '../../asset/image/qoran.mp3'

class Vedio extends Component {

    constructor(){
        super();

        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="vedioCard">
                            <div>
                                <p className="vedioTitle">How I Do</p>
                                <p className="vedioDes">the 1960s with the release of Letraset sheets containing Loremthe 1960s with the release of Letraset sheets containing Loremthe 1960s with the release of Letraset sheets containing Loremsurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                <Modal.Body>
                    <Player>
                        <source src={quran} />
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.modalClose}>
                     Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Vedio;