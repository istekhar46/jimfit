import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../gifs/never_give_up.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="15px" style={{ marginTop: '160px' }} >
    <Typography color="#FF2625" fontWeight="600" fontSize="50px">JIM FIT</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '34px', xs: '30px' } }} mb="23px" mt="30px">
      Empower your  <br />
      Fitness
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#212529', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{marginTop:'-92px',height:'35rem'}} />
  </Box>
);

export default HeroBanner;
