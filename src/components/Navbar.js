import React from 'react';
import Logo from '../assets/images/Logo-1.jpg';

export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light font-dark" style={{ zIndex: '1', opacity: '0.95', fontSize: '1rem', boxShadow: '0pc 0.5px 0.5px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" ><img src={Logo} alt="" style={{ height: '35px', borderRadius: '50%' }} /></a>
          {/* <a className="navbar-brand" href="/">Gym-Fit</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-3" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/news">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/bfc">BFC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/bmi">BMI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/eg">Exercises</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/about">About</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
