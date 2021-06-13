import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from 'recharts'

class Analysis extends Component {

    constructor(){
        super();

        this.state={
            data:[
                {Technology:'java', Projects:100},
                {Technology:'Kotline', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65},
            ]
        }
    }

    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <Row>
                        <Col style={{ width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>

                            <BarChart width={100} height={300} data={this.state.data}>
                            <XAxis dataKey="Technology"/>
                            <Tooltip/>
                            <Bar dataKey="Projects" fill={blue}>
                            </Bar>
                            </BarChart>

                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable spassage, and going through the cites of the word in classical literature, discovered the undoubtable spassage, and going through the cites of the word in classical literature, discovered the undoubtable spassage, and going through the cites of the word in classical literature, discovered the undoubtable s</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;