import React from 'react';
import { Link } from 'gatsby';

import './layout.css';

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
