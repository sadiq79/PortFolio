import React, { Component } from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import ''

export default class About extends Component {
  render() {
    return (
      <div className>
        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <img src="./pages/image.jpg"/>
            </Col>
            <Col xs={2} sm={4} md={6} lg={8}xl={10}>
                <h1>About Me</h1>
                    <p>
                     "I have finished my Frontend Development from Soal
                    </p>       
                <h2>Contact Details</h2>
                    <p>
                        <span>Mohammed Sadiq ALi</span>
                        <br/>
                        <span>https://www.google.com</span>
                    </p>
            </Col> 
        </Row>
        
      </div>
    );
  }
}
