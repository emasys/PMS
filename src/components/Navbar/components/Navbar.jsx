/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';

const Navbar = () => (
  <Headroom>
    <nav className="navbar navbar-expand-lg navbar-dark bg-greyish">
      <Link to="/" className="navbar-brand">
        popdify
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              add location
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/locations" className="nav-link">
              view your locations
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 col-8 justify-content-end">
          <input
            className="form-control mr-sm-2 col-md-5 col-sm-12 search-box"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  </Headroom>
);

export default Navbar;
