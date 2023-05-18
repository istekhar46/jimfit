import React from 'react';
import Loading from '../gifs/Fading circles.gif';

const Spinnig = () => {
  return (
    <>
    <div className='text-center'>
      <img style={{ height: '15px', width: 'auto' }} src={Loading} alt="loading.." />
    </div>
    </>
  );
};

export default Spinnig;
