import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Ootmarsum</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Thuis
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          Over
        </Nav.Link>
        <Nav.Link as={Link} to="/photos">
          Foto's
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default Navigation
