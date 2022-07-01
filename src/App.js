import React, {Component,useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import FrontPage from './FrontPage';
import Exp from './Exp';
import A_bit_about_me from './A_bit_about_me';
import Skillset_and_projects from './Skillset_and_projects';
import Footer from './Footer';

function App(){
  return (
    <div className="App">
      <Navbar />
      <FrontPage />
      <A_bit_about_me />
      <Skillset_and_projects />
      <Exp />
      <Footer />
    </div>
  );
  }

export default App;
