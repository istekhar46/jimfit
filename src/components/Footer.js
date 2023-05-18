import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.jpg';

const Footer = () => (
  <>
    <Box mt="80px" className='boxShadow: 0pc 0.5px 0.5px'>
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="0" pt="24px">
        <img src={Logo} alt="logo" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">

      </Typography>


    </Box>

  </>
);

export default Footer;
