// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleRouter from './SimpleRouter';
import { BrowserRouter } from 'react-router-dom';
 
ReactDOM.render(
 <BrowserRouter>
   <SimpleRouter />
 </BrowserRouter>,
 document.getElementById('root'),
);