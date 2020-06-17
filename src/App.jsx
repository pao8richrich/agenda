import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './MyCard'
import {Container, Row, Col, Badge} from 'react-bootstrap';
import SignupForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
      <Container className="justify-content-md-center">
      <h1>
       The TEAM <Badge variant="secondary">:)</Badge>
      </h1>
        <Row>
          <Col sm={3}>
            <SignupForm />
          </Col>
          <Col sm={9}>
          <MyCard />
          </Col>
        </Row>
      </Container>

     
      </header>
    </div>
  );
}

export default App;
