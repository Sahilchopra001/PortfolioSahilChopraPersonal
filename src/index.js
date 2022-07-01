import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Projects_page from './Projects_page';
import Contact from './Contact';
import Skillset_page from './Skillset_page';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    
    <Routes>
        <Route path='/' element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path='/Projects_page' element={<Projects_page />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Skillset_page' element={<Skillset_page />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
 
reportWebVitals();
