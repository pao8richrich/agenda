import React, { Component } from 'react';
import './App.css';
import MyCard from './MyCard'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import SignupForm from "./components/Form"

const info = [
  {
    "nombre": "Daniel",
    "apellido": "Martinez",
    "ciudad": "Bogota",
    "empleo": "desarrollador",
    "fechaInicio": "12/03/2020"
  },
  {
    "nombre": "Pao",
    "apellido": "Martinez",
    "ciudad": "Bogota",
    "empleo": "desarrollador",
    "fechaInicio": "12/03/2020"
  },
  {
    "nombre": "Maria",
    "apellido": "Consuelo",
    "ciudad": "Bogota",
    "empleo": "desarrollador",
    "fechaInicio": "12/03/2020"
  }
];
class App extends Component {

  state = {
    data: info
  }

  render() {
    const data = this.state.data;
    return (
      <div className="App">

        <Container className="justify-content-md-center">
          {
            data.map(card => (
              <Row>
                <Col sm={3}>
                  <SignupForm />
                </Col>
                <Col sm={9}>
                  <MyCard
                    nombre={card.nombre}
                    apellido={card.apellido}
                    ciudad={card.ciudad}
                    empleo={card.empleo}
                    fechaInicio={card.fechaInicio}
                  />
                </Col>
              </Row>
            ))
          }

        </Container>\
      </div>
    );
  }
}

export default App;
