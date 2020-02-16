import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home'
import Routing from './Routing';




function App() {
  return (
    <Router>
      <div>
      Bienvenido
       <Routing />
      </div>
  </Router>
  );
}

export default App;
