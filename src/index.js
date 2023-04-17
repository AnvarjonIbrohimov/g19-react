import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components';
import Button from './components/Generic/Button';
import Hero from './components/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <Home/>
    {/* <Button/> */}
  </React.StrictMode>
);





