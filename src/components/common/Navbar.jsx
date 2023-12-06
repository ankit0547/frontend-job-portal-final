/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
        <div className='container-fluid'>
          <button className='navbar-brand btn' onClick={() => navigate("/")}>
            Find Jobs
          </button>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <button
                  className='nav-link active'
                  aria-current='page'
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link active'
                  aria-current='page'
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
