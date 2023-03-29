import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar.js';
import Hero from './hero';
import Footer from './Footer';
import Card from './card';

const root = ReactDOM.createRoot(document.getElementById('root'));


let name = "Anvarjon";
let user =  {name:" Akmaljon"};
let desc = "Some text";


root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Card/>
      <h1>Hello world {user.name}</h1>
      <p>Description {desc} </p>
      <h1>{name}</h1>
      <Hero/>
      <Footer/>
  </React.StrictMode>
);





