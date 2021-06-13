import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import graphicsLogo from '../../asset/image/graphics.svg'
import mobileLogo from '../../asset/image/mobile.svg'
import webLogo from '../../asset/image/web.svg'
import AppUrl from '../../RestAPI/AppUrl'
import RestClient from '../../RestAPI/RestClient';

class Services extends Component {

    constructor(){
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.Services).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        const myList=this.state.myData;
        const myView=myList.map(indexNo=>{
            return  <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
                <img src={indexNo.services_logo}/>
                <h2 className="serviceName">{indexNo.services_name}</h2>
                <p className="serviceDescription">{indexNo.services_description}</p>
            </div>
          </Col>
        })
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>
                    <Row>

                        {myView}

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;