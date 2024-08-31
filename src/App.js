import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import Navbar from './components/Navbar/Navbar';
import StarField from './components/Stars/Stars';

function App() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%)',
        overflow: 'hidden'
      }}>
        <Header />
        <StarField className='z-10'/>
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
