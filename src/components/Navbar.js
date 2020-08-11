import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css'
 function Bar(){
     return(
         <div>
             <reactBootstrap.Navbar collapseOnSelect expand="sm" className="color"  fixed="top">
  <reactBootstrap.Navbar.Brand href="#home"><strong>Kickstartx</strong></reactBootstrap.Navbar.Brand>
  <reactBootstrap.Form inline>
    <reactBootstrap.InputGroup>
      <reactBootstrap.InputGroup.Prepend>
      </reactBootstrap.InputGroup.Prepend >
      <reactBootstrap.FormControl
        placeholder="Search"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    
    </reactBootstrap.InputGroup>
  </reactBootstrap.Form>
  <reactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <reactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
    <reactBootstrap.Nav className="mr-auto">
    
    </reactBootstrap.Nav>
    <reactBootstrap.Nav>
     
      <reactBootstrap.Nav.Link href="#Contact Us"><i class="fa fa-home fa-2x" aria-hidden="true"></i></reactBootstrap.Nav.Link>
      <reactBootstrap.Nav.Link href="#Contact Us"><i class="fa fa-user fa-2x" aria-hidden="true"></i></reactBootstrap.Nav.Link>
      <reactBootstrap.Nav.Link href="#Contact Us"><i class="fa fa-bell-o fa-2x" aria-hidden="true"></i></reactBootstrap.Nav.Link>
      
    </reactBootstrap.Nav>
  </reactBootstrap.Navbar.Collapse>
</reactBootstrap.Navbar>
         </div>
     )
 }
export default Bar;