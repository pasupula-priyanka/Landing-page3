import React,{useEffect}from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import * as reactBootstrap from 'react-bootstrap';
import './App.css';


function Mentor(){
    useEffect(()=>{
       Aos.init({duration:2000});
    },[]);
    return(
        <div className="Card1" data-aos="fade-right">
         <reactBootstrap.Card >
  
  <reactBootstrap.Card.Body>
    <reactBootstrap.Card.Title>MentorShip</reactBootstrap.Card.Title>
    <reactBootstrap.Card.Text>
    The best teachers are those who tell you where to look – but don't tell you what to see.” 
    </reactBootstrap.Card.Text>
    <reactBootstrap.Button className="btn-color"><strong>Know More</strong></reactBootstrap.Button> 
  </reactBootstrap.Card.Body>
</reactBootstrap.Card>
    </div>
    )

}

export default Mentor;
