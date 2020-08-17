import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">WikiCountries</Link>
      </div>
    </nav>
  );
}

export default Navbar;
