import React from "react";
import logo from '../assets/shared/desktop/logo.svg'
import cart from '../assets/shared/desktop/icon-cart.svg';
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
      <div className="header">
          <nav id="navbar" className="navbar navbar-expand-lg d-flex">
              <div className="container">
                  <NavLink className="navbar-brand" to="/"><img src={logo} alt="brand"/></NavLink>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <NavLink to="/"  className="nav-link">HOME</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/headphones" className="nav-link">HEADPHONES</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/speaker"  className="nav-link">SPEAKER</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/earphones"  className="nav-link">EARPHONES</NavLink>
                      </li>
                      <li className="nav-item">
                          <img src={cart} alt="cart" className="cart"/>
                      </li>
                  </ul>

              </div>
          </nav>
      </div>
  );
}
export default Header;
