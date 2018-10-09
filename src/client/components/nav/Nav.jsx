import React from 'react';

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

const Nav = () => (
  <nav>
    <a href="#posts">
Posts
    </a>
    <a href="#about">
About Me
    </a>
  </nav>
);

export default Nav;
