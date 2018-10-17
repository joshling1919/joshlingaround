import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './nav/Nav';
import Posts from './posts/Posts';
import About from './about/About';

const Body = styled.div`
  padding: 25px 20px;
`;

const Home = () => (
  <div>
    <Nav />
    <Body>
      <Route exact path="/" component={Posts} />
      <Route exact path="/about" component={About} />
    </Body>
  </div>
);

export default Home;
