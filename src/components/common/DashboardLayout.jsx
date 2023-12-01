/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className='dashboard-layout'>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand h1' href='#'>
            Find Job
          </a>
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
            <ul className='navbar-nav  mb-2 mb-lg-0 ms-auto'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Link
                </a>
              </li>

              <li className='nav-item'>
                <button
                  className='nav-link'
                  aria-disabled='true'
                  onClick={() => {
                    localStorage.clear();
                    navigate("/sign-in");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
