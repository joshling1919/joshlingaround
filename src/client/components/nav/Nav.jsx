import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
`;

const Navigation = styled.nav`
  padding: 25px 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

const NavLink = styled.a`
  margin-right: 25px;
`;

const Nav = () => (
  <Header>
    <Navigation>
      <NavLink href="#posts">
Posts
      </NavLink>
      <NavLink href="#about">
About
      </NavLink>
    </Navigation>
  </Header>
);

export default Nav;

// sections
// 1. blog: all my blog posts
// categories of blog posts:
// a) hobbies- piano, food, sports
// b) beliefs- philosophical, political, religious
// c) tech?
// d) education
// so maybe in the beginning the layout won't cater to multiple cateogries
// but if I actually make enough posts, then I'll do a redesign to more easily
// see all the different categories
// 2. about me:
// subsections:
// a) brief summary of me and my interests/passions
// b) resume/professional accomplishments
// c) personal projects

// inspiration: https://html5up.net/read-only
// actually love this one: http://demo.themewagon.com/preview/black-n-white-clean-responsive-blog-template
// https://themewagon.com/
