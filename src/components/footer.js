import React from "react"
//import * as reactBootstrap from 'react-bootstrap';
import './App.css';

function Footer(){
    return(
        <div>
       <hr />
       <div className="main-footer">
           <div className="container">
               <div className="row">
                       <div className="col">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    <i className="fa fa-soundcloud" aria-hidden="true"></i>
                            
                       </div>
               </div>
               <hr />
               <div className="row">
                   <p className="col-sm">
                              &copy;{new Date().getFullYear()} Kickstartx| All rights reserved | Privacy
                   </p>
               </div>
           </div>
       </div>
       </div>
    )
}

export default Footer;