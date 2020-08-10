import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';

function download(){
    return(
      <div className="Card1">
           <h1>Download </h1>
           <h1>KickstartX On</h1>
           
          <reactBootstrap.Button className="btn-color"><i class="fa fa-android" aria-hidden="true"></i> <strong>Download on Play Store</strong></reactBootstrap.Button>
          
          <reactBootstrap.Button className="btn-color"><i class="fa fa-apple" aria-hidden="true"></i> <strong>Download on App store</strong></reactBootstrap.Button>
      </div>
    )
}

export default download;