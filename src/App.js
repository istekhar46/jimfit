import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import './index.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import About from './components/About';
import BodyFatCalculator from './components/BFICalculator';
import BMICalculator from "./components/BMICalculator";

import ExerciseList from './components/ExerciseGenerator';

import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react'



const App = () => {
  const [progress, setProgress] = useState(0)
  const setProg = (prog) => {
    setProgress(prog);
  }
  return (
    <>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress={setProg} />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/news/" element={<News setProgress={setProg} />} />
          <Route path="/bfc/" element={<BodyFatCalculator setProgress={setProg}/>} />
          <Route path="/bmi" element={<BMICalculator setProgress={setProg} />} />
          <Route path="/eg/" element={<ExerciseList setProgress={setProg}/>} />
          <Route path="/about" element={<About setProgress={setProg}/>} />
        </Routes>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Footer />
      </Box>
    </>
  )
};

export default App;




