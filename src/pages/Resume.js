import React, { Component } from 'react'
import {Progress, Card ,Row, Col} from 'antd';
import 'antd/dist/antd.css';

export default class Resume extends Component {
  render() {
    return (
      <div>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Card
              title="Experience"
              style={{width: 300}}>
                  <p>Working as an Jr.Developer at Burrworks Pvt Ltd.
                 On the Project Umra Ride based on transportation with the technologies PHP, JavaScript, Laravel , Angular.
                </p>
            </Card>
            <br></br>
            <Card 
                title="Education"
                style={{width: 300}}
            >
                <h6>JNTUH University</h6>
                <p>Completed BTech CSE from VISION FOR INNOVATIVE FUTURE ENGINEERING COLLEGE AND TECHNOLOGY Affiliated by JNTUH in the year 2016</p>
                <h6>A P State Board Of Intermediate</h6>
                <p>Completed 12th From Narayana Junior College  in the year 2012</p>
                <h6>SSC</h6>
                <p>Completed Schooling from Chaitanya Vidya Niketan High school</p>
            </Card>
            </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Card
                title="Skills"
                style={{width:300}}
            >
              
                <h6>Html</h6>
                <Progress percent={80}size='default' status='active'/>
                <h6>CSS</h6>
                <Progress percent={60}size='default' status='active'/>
                <h6>JavaScript</h6>
                <Progress percent={60}size='default' status='active'/>
                <h6>ReactJS</h6>
                <Progress percent={60}size='default' status='active'/>
                <h6>PHP</h6>
                <Progress percent={60} size='default' status='active'/>
                <h6>Laravel</h6>
                <Progress percent={70} size='default' status='active'/>
             </Card>
        </Col>
        </Row>
      </div>
    )
  }
}

