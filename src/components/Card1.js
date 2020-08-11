import React,{useEffect} from 'react';
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

function Card1(){
    useEffect(()=>{
        Aos.init({duration:2000});
     },[]);
    return(
    <div className="Card1" data-aos="fade-right">
        <h1>Transform Your Life</h1>
        <h5>
            Learn from the world's best teachers,</h5>
            <h5>
           on the leading professional growth platform
            </h5>
    </div>
    )
}
export default Card1;