import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Entradas from '../assets/entradas.png';
import Prato from '../assets/pratos.png';
import Delivery from '../assets/delivery.png';
import Sobremesas from '../assets/sobremesas.png';
import Card from 'react-bootstrap/Card';
import Reserva from '../assets/reserva.png';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Prato} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Entradas} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Sobremesas} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <CardGroup>
        <Card>
          <Link to={'/Contato'}>
            {' '}
            <Card.Img variant="top" src={Reserva} />
          </Link>
        </Card>
        <Card>
          <Link to={'/menu'}>
            {' '}
            <Card.Img variant="top" src={Delivery} />
          </Link>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Home;
