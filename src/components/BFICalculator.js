import React, { useState } from 'react';
import { useEffect } from 'react';
import '../index.css'

const BodyFatCalculator = (props) => {
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [bodyFat, setBodyFat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform the body fat calculation based on the input values
    const weightValue = parseFloat(weight);
    const waistValue = parseFloat(waist);
    const neckValue = parseFloat(neck);

    // Perform the body fat calculation (example formula)
    const bodyFatValue = ((weightValue - (waistValue + neckValue)) * 100) / weightValue;
    setBodyFat(bodyFatValue.toFixed(2));
  };

  useEffect(() => {
    props.setProgress(100)
  }, [])
  return (
    <div className="container" style={{ marginTop: "88px"}}>
      <div >
        <h2 className="text-center mb-4" style={{color:'#ff2625',padding:'24px 0'}}>Body Fat Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">Weight (in kg):</label>
            <input
              type="number"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="waist" className="form-label">Waist circumference (in cm):</label>
            <input
              type="number"
              id="waist"
              className="form-control"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="neck" className="form-label">Neck circumference (in cm):</label>
            <input
              type="number"
              id="neck"
              className="form-control"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
              required
            />
          </div>
          <div className="text-center d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-dark mt-5">
              Calculate
            </button>
          </div>
        </form>
        {bodyFat !== '' && (
          <div className="mt-4">
            <h3>Results:</h3>
            <p>Body Fat Percentage: {bodyFat}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyFatCalculator;
