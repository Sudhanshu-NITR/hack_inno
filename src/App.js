import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import Navbar from './components/Navbar/Navbar';
import StarField from './components/Stars/Stars';

function App() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
        overflow: 'hidden'
      }}>
        <Header />
        <StarField className='z-10'/>
        <Navbar setShowCarousel={setShowCarousel}/>
        {showCarousel && <Carousel className='z-5'/>}
        <Footer />
      </div>
    </>
  );
}

export default App;
