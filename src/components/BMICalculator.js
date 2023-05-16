import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters

    if (weightInKg && heightInMeters) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    } else {
      setBmi('');
      setCategory('');
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>Weight (in kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Height (in cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Calculate BMI</button>
      {bmi && category && (
        <div>
          <h3>Result:</h3>
          <p>BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;