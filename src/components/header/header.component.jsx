import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

// desing pattern: Stateless
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="Logo-container" to="/">
      <Logo className="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
    </div>
  </div>
);

export default Header;

//rafce  - definicion base
