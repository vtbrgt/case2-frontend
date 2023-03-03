import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

import "./Navbar.css";
import logo from '../assets/RATATOUILLE_logo.png'

const NavbarReact = () => {
  return (
    <div>
       <Navbar id='barra_de_pesquisa' variant="dark" bg="bg-warning" expand="lg">
      <Container >
        <Navbar.Brand href="/"><img src={logo} className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="Ver mais" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sobre">Sobre o Restaurante</NavDropdown.Item>
              <NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/contato">Contato</NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarReact
