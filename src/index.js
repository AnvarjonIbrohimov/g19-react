import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './navbar';
import Card from './Card';
import data from './mock.js'
import Button from './button';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    {/* <Navbar title="HTML" count={10}  />
    <Navbar title="CSS" count={15}  />
    <Navbar title="REACT" count={20}  > */}
    <Button bg="blue" color="white" title="Login" />
    <Button bg="red" color="white" title="Registratsiya" />
    <Button bg="aqua" color="black" title="Buy" />
    <div className='card__box'>
      {
        data.map((value )=> (
      <Card key={value.id} title={value.title} country={value.country} price={value.price} />
        ))
      }
    
    </div>
    {/* <h1>Hello world</h1> */}
  </React.StrictMode>
);





