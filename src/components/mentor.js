import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css';

function Mentor(){
    return(
        <div className="Card1">
        <h1>MentorShip</h1>
        <h5>
        The best teachers are those who tell you where to look – but don't tell you what to see.” “A mentor empowers a person to see a possible future, and believe it can be obtained.
         </h5>
            
            <reactBootstrap.Button className="btn-color"><strong>See our student's stories</strong></reactBootstrap.Button>
    </div>
    )

}

export default Mentor;