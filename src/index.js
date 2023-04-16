import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import App from './class__lesson';
import Webbrain from './webbrain';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <Webbrain/>
    {/* <Navbar2/> */}
    {/* <App/> */}
  </React.StrictMode>
);





