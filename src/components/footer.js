import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import Twitter from '../assets/shared/desktop/icon-twitter.svg'
import Facebook from '../assets/shared/desktop/icon-facebook.svg'
import Instagram from '../assets/shared/desktop/icon-instagram.svg'
import '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'

const Footer = () => {
  return (
      <div className="footer">
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
                          <NavLink to="/speakers" className="nav-link">SPEAKER</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="/earphones" className="nav-link">EARPHONES</NavLink>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="footer-details d-flex" >
              <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
                  lovers and sound specialists who are devoted
                  to helping you get the most out of personal audio. Come and visit our
                  demo facility - we’re open 7 days a week.</p>
              <div className="socials d-flex">
                  <img className="social" src={Twitter} alt=""/>
                  <img className="social" src={Facebook} alt=""/>
                  <img className="social" src={Instagram} alt=""/>
              </div>
          </div>
      </div>
  );
}
export default Footer;
