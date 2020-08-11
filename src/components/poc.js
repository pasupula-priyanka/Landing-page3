import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';

function Poc(){
    return(
        <div className="Card1">
        <h1>Proof Of Concept</h1>
        <h5>
        Proof of concept is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential.
         </h5>
            
            <reactBootstrap.Button className="btn-color"><strong>See our student's stories</strong></reactBootstrap.Button>
    </div>
    )

}

export default Poc;