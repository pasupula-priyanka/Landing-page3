import React ,{useEffect}from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Learning(){
    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
    return(
        <div className="Card1" data-aos="fade-right">
        <reactBootstrap.Card>
  
  <reactBootstrap.Card.Body>
    <reactBootstrap.Card.Title>Learn From World's Best Plaatforms</reactBootstrap.Card.Title>
    <reactBootstrap.Card.Text>
    In an effective classroom, students should not only know what they are doing, they should also know why and how.
    </reactBootstrap.Card.Text>
    <reactBootstrap.Button className="btn-color"><strong>Know More</strong></reactBootstrap.Button> 
  </reactBootstrap.Card.Body>
</reactBootstrap.Card>
    </div>
    )

}

export default Learning;

