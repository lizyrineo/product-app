import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <header>
            <Link className="styleLink" to="/">
              ProductsApp
            </Link>
          </header>
    </div>
  );
};

export default Header;