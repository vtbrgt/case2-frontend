import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Entradas from '../assets/entradas.png'
import Prato from '../assets/pratos.png'
import Sobremesas from '../assets/sobremesas.png'

const Home = () => {
  return (
    <div>
     

    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Prato}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Entradas}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sobremesas}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );


    </div>
  )
}

export default Home
