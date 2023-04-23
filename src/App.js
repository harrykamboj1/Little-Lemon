import React,{Fragment} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routing from './components/Routing';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
