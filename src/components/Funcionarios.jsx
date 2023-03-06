import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Funcionario = ({nome, sobrenome, cargo}) => {
  return (
    <Row xs={'auto'} md={'auto'} className="m-2">
      <Col>
        <Card>
        <Card.Body>
          <Card.Title>{nome} {sobrenome}</Card.Title>
          <Card.Text>{cargo}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
      
  )
}

export default Funcionario