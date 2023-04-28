import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './component/ClassComponent';
import Hook from './component/Hook';
import Calculator from './component/Calculator';


const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
      <Calculator/>
      {/* <Hook/> */}
      {/* <ClassComponent/> */}
    </div>
  </React.StrictMode>
);





