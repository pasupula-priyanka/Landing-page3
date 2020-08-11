import React,{useEffect} from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Download(){
  useEffect(()=>{
    Aos.init({duration:2000});
 },[]);
    return(
      <div className="Card1" data-aos="fade-right">
           <h1>Download </h1>
           <h1>Kickstartx On</h1>
           
          <reactBootstrap.Button className="btn-color"><i class="fa fa-android" aria-hidden="true"></i> <strong>Download on Play Store</strong></reactBootstrap.Button>
          
          <reactBootstrap.Button className="btn-color"><i class="fa fa-apple" aria-hidden="true"></i> <strong>Download on App store</strong></reactBootstrap.Button>
      </div>
    )
}

export default Download;