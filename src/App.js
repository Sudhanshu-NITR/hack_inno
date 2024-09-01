import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import Navbar from './components/Navbar/Navbar';
import StarField from './components/Stars/Stars';
import APS from './components/Clubs/APS';
import Cyborg from './components/Clubs/Cyborg';
import FOOTBALL from './components/Clubs/Knights';
import ASME from './components/Clubs/ASME';
import MUSIC from './components/Clubs/Pantomine';
import Opencode from './components/Clubs/Opencode';
import Cognizen from './components/Clubs/Cognizen';
import Kalaam from './components/Clubs/Kalaam'
import Knights from './components/Clubs/Knights';
import Pantomine from './components/Clubs/Pantomine';
import Mavericks from './components/Clubs/Mavericks';
import Ritvic from './components/Clubs/Ritvic';
import Axiom from './components/Clubs/Axiom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chitraang from './components/Clubs/Chitraang';
function App() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
        overflow: 'hidden'
      }}>
        <StarField/>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar setShowCarousel={setShowCarousel} className="z-5"/>
              {showCarousel && <Carousel className='z-5' />}
            </>
          } />
          <Route path="Clubs/Axiom" element={<Axiom />}/>
          <Route path="/Clubs/APS" element={<APS />} />
          <Route path="/Clubs/Cyborg" element={<Cyborg />} />
          <Route path="/Clubs/FOOTBALL" element={<FOOTBALL />} />
          <Route path="/Clubs/Opencode" element={<Opencode />} />
          <Route path="/Clubs/Cognizen" element={<Cognizen />} />
          <Route path="/Clubs/MUSIC" element={<MUSIC />} />
          <Route path="/Clubs/ASME" element={<ASME />} />
          <Route path="/Clubs/Kalaam" element={<Kalaam />} />
          <Route path="Clubs/Knights" element={<Knights/>}/>
          <Route path="Clubs/Pantomine" element={<Pantomine />}/>
          <Route path="Clubs/Ritvic" element={<Ritvic />}/>
          <Route path="Clubs/Mavericks" element={<Mavericks />}/>
          <Route path="Clubs/Chitraang" element={<Chitraang />}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
