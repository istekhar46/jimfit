import React from 'react';
import { Stack } from '@mui/material';
import loading from '../assets/images/Fading circles.gif';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <img src={loading} alt="" />
  </Stack>
);

export default Loader;
