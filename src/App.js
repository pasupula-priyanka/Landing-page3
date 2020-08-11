import React from 'react';
import Bar from './components/Navbar';
import Card1 from './components/Card1';
import Download from './components/download';
import Footer from './components/footer';
import Learning from './components/learning';
import Mentor from './components/mentor';
import Poc from './components/poc';
function App() {
  return (
    <div>
     <Bar />
     <Card1 />
     <Learning />
     <Mentor />
     <Poc />
     <Download />
     <Footer />
    </div>
  );
}

export default App;
