import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Component/mobile/Home';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Home/> 
  </BrowserRouter>
  
  ,document.getElementById('root')
);


