import React from 'react'
//import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import {Clock} from './Clock';

import './App.css';
//import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Swith, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Clock/>
      <Navbar/>
    </Router>
  );
}

export default App;
