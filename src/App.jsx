import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard'
import {Container, Row, Col, Badge} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      <Container className="justify-content-md-center">
      <h1>
       The TEAM <Badge variant="secondary">:)</Badge>
      </h1>
        <Row>
          <Col>
          <MyCard />
          </Col>
        </Row>
      </Container>

     
      </header>
    </div>
  );
}

export default App;
