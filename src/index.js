// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {PrivateExample} from './Private';
import { BrowserRouter } from 'react-router-dom';
 
ReactDOM.render(
 <BrowserRouter>
   <PrivateExample />
 </BrowserRouter>,
 document.getElementById('root'),
);