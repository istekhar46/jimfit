import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.jpg';

const Footer = () => (
  <>
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="0" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">

      </Typography>
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/news">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bmi">BMI</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/eg">Exercises</a>
          </li>
        </ul>
      </div>

    </Box>

  </>
);

export default Footer;
