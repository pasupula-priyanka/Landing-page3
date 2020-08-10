import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css'
 function Bar(){
     return(
         <div>
             <reactBootstrap.Navbar collapseOnSelect expand="sm" className="color"  fixed="top">
  <reactBootstrap.Navbar.Brand href="#home"><strong>Kickstartx</strong></reactBootstrap.Navbar.Brand>
  <reactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <reactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <reactBootstrap.Nav className="mr-auto">
    <reactBootstrap.NavDropdown title="About" id="collasible-nav-dropdown">
        <reactBootstrap.NavDropdown.Item href="#action/3.1">About Us</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.2">Our Team</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.3">Press</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.4">Careers</reactBootstrap.NavDropdown.Item>
      </reactBootstrap.NavDropdown>
      <reactBootstrap.NavDropdown title="Programs" id="collasible-nav-dropdown">
        <reactBootstrap.NavDropdown.Item href="#action/3.1">Free Courses</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.2">All Programs</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.3">Download App</reactBootstrap.NavDropdown.Item>
      </reactBootstrap.NavDropdown>
      <reactBootstrap.NavDropdown title="Channels" id="collasible-nav-dropdown">
        <reactBootstrap.NavDropdown.Item href="#action/3.1">Instagram</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.2">Facebook</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.3">Twitter</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#action/3.4">LinkedIn</reactBootstrap.NavDropdown.Item>
      </reactBootstrap.NavDropdown>
      <reactBootstrap.NavDropdown title="Events" id="collasible-nav-dropdown">
        <reactBootstrap.NavDropdown.Item href="#Training">Traning</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#Mentorship">Mentorship</reactBootstrap.NavDropdown.Item>
        <reactBootstrap.NavDropdown.Item href="#POC">POC</reactBootstrap.NavDropdown.Item>
      </reactBootstrap.NavDropdown>
    </reactBootstrap.Nav>
    <reactBootstrap.Nav>
      <reactBootstrap.Nav.Link href="#Contact Us">Contact Us</reactBootstrap.Nav.Link>
      <reactBootstrap.Nav.Link eventKey={2} href="#Login">
        Login
      </reactBootstrap.Nav.Link>
    </reactBootstrap.Nav>
  </reactBootstrap.Navbar.Collapse>
</reactBootstrap.Navbar>
         </div>
     )
 }
export default Bar;