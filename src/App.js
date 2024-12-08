import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  console.log("hello");
  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
