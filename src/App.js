import React from 'react';
import Bar from './components/Navbar';
import Card1 from './components/Card1';
import Carousel from './components/Carousel';
import Review from './components/reviews';
import Download from './components/download'
function App() {
  return (
    <div>
     <Bar />
     <Card1 />
     <Carousel />
     <Review />
     <Download />
    </div>
  );
}

export default App;
