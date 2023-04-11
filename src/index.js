import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import State from './State';
import Login from './Login';
import DollorToSom from './DollorToSom';
import YearCheack from './YearCheack';
import NumOrtaArf from './NumOrtaArf';
import CRUD from './CRUD';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
   {/* <State/>*/}
   {/*<Login/>*/}
   {/*<DollorToSom/>
   <br/>
   <YearCheack/>
   <hr/>
   <br/>
   <NumOrtaArf/>
<hr/>*/}
   <CRUD/>
  </React.StrictMode>
);





