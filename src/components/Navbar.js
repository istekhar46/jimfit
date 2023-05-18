import React from 'react';
import Logo from '../assets/images/Logo-1.jpg';

export default function Navbar() {
  return (
    <div className="">
      <nav className=" navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{ zIndex: '1', opacity: '0.95', fontSize: '1.3rem', boxShadow: '0pc 1px 5px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" ><img src={Logo} alt="" style={{ height: '70px', borderRadius: '50%' }} /></a>
          {/* <a className="navbar-brand" href="/">Gym-Fit</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bmi">BMI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/eg">Exercises</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
