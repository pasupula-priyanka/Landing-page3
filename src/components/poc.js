import React,{useEffect} from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Poc(){
    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
    return(
        <div className="Card1" data-aos="fade-right">
        <reactBootstrap.Card >
  
        <reactBootstrap.Card.Body>
          <reactBootstrap.Card.Title>Proof Of Concept</reactBootstrap.Card.Title>
          <reactBootstrap.Card.Text>
          Proof of concept is a realization of a certain method or idea in order to demonstrate its feasibility
          </reactBootstrap.Card.Text>
          <reactBootstrap.Button className="btn-color"><strong>Know More</strong></reactBootstrap.Button> 
        </reactBootstrap.Card.Body>
      </reactBootstrap.Card>
      </div>
    )

}

export default Poc;
