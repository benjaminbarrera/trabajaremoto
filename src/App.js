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
      <h1 className="text-primary bold">Trabajaremoto.mx</h1>
      <h3>desde casa o de donde sea!</h3>
       <Routing />
      </div>
  </Router>
  );
}

export default App;
