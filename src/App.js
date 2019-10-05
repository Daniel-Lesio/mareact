import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Post from './components/Post'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Post/:post_id' component={Post} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
