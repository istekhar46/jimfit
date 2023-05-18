import React, { useState, useEffect } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(null);

  useEffect(() => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const bodyFatValue = calculateBodyFatPercentage(bmiValue); // Custom function for body fat calculation

      setBmi(bmiValue.toFixed(2));
      setBodyFatPercentage(bodyFatValue.toFixed(2));
    } else {
      setBmi(null);
      setBodyFatPercentage(null);
    }
  }, [weight, height]);

  const calculateBodyFatPercentage = (bmi) => {
    // Perform body fat calculation based on BMI value
    // Replace with your own calculation logic
    return (bmi * 2).toFixed(2);
  };

  const getBmiColorClass = () => {
    if (bmi === null) return ''; // No color class if BMI is not calculated yet
    if (bmi < 18.5) return 'underweight';
    if (bmi >= 18.5 && bmi < 25) return 'normal-weight';
    if (bmi >= 25 && bmi < 30) return 'overweight';
    return 'obese';
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      {bmi !== null && (
        <div>
          <p>BMI: {bmi}</p>
          <p>Body Fat Percentage: {bodyFatPercentage}%</p>
          <div className={`bmi-color ${getBmiColorClass()}`}>
            Classification: {getBmiColorClass()}
          </div>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
