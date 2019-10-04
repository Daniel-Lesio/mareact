import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
