import React, { Component } from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import image from './image.jpg'

export default class About extends Component {
  render() {
    return (
      <div className>
        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <img src={image} alt="image"/>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8}xl={10}>
                <h1>About Me</h1>
                    <p>
                     "I had completed Frontend Development from School of accelerated Learning.
                    </p>       
                <h2>Contact Details</h2>
                    <p>
                        <span>Mohammed Sadiq Ali</span>
                        <br/>
                        <span>https://www.google.com</span>
                    </p>
            </Col> 
        </Row>
        
      </div>
    );
  }
}
