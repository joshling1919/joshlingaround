import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Posts from './posts/Posts';
import About from './about/About';

const Home = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Posts} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default Home;
