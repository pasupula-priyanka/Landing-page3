import React from "react"
import * as reactBootstrap from 'react-bootstrap';
import './App.css'

function Carousel(){
            return (
                <div>
                <reactBootstrap.CardDeck>
  <reactBootstrap.Card className="Deck">
   
    <reactBootstrap.Card.Body>
      <reactBootstrap.Card.Title>Learning</reactBootstrap.Card.Title>
      <reactBootstrap.Card.Text>
      The harder I work, the smarter I get. Rising to justice learning with joy building our future. Our vision is every child known, safe, inspired, challenged, empowered.
      </reactBootstrap.Card.Text>
      <reactBootstrap.Button className="color">Learn More</reactBootstrap.Button>
    </reactBootstrap.Card.Body>
   
  </reactBootstrap.Card>
  <reactBootstrap.Card className="Deck">
   
    <reactBootstrap.Card.Body>
      <reactBootstrap.Card.Title>Mentorship</reactBootstrap.Card.Title>
      <reactBootstrap.Card.Text>
      A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.{' '}
      </reactBootstrap.Card.Text>
      <reactBootstrap.Button className="color">Learn More</reactBootstrap.Button>
    </reactBootstrap.Card.Body>
   
  </reactBootstrap.Card>
  <reactBootstrap.Card className="Deck">
   
    <reactBootstrap.Card.Body>
      <reactBootstrap.Card.Title>Proof Of Concept</reactBootstrap.Card.Title>
      <reactBootstrap.Card.Text>
      Proof of concept or proof of principle is a realization of a certain method or idea in order to demonstrate its feasibility, or a demonstration in principle with the aim of verifying that some concept or theory has practical potential. 
      </reactBootstrap.Card.Text>
      <reactBootstrap.Button className="color">Learn More</reactBootstrap.Button>
    </reactBootstrap.Card.Body>
   
  </reactBootstrap.Card>
</reactBootstrap.CardDeck>
  </div>
    )
}
            


export default Carousel;