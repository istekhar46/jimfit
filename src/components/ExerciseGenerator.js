// import { wrap } from 'module';
import React, { useState } from 'react';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [muscle, setMuscle] = useState('');
  const [equipment, setEquipment] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (name) queryParams.append('name', name);
    if (type) queryParams.append('type', type);
    if (muscle) queryParams.append('muscle', muscle);
    if (equipment) queryParams.append('equipment', equipment);
    if (difficulty) queryParams.append('difficulty', difficulty);

    const queryString = queryParams.toString();
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?${queryString}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'da44104637msh36f860226755d36p1ec7f0jsnd237cb9ccc01',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setExercises(data);
      setShowForm(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReset = () => {
    setExercises([]);
    setShowForm(true);
    setName('');
    setType('');
    setMuscle('');
    setEquipment('');
    setDifficulty('');
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Exercise List</h2>

      {showForm && (
        <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
              <label htmlFor="name" className='form-label'>Name:</label>
            <input type="text" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>


          <div className='col-md-6'>
            <div className="form-group">
            <label htmlFor="type" className='form-label'>Type:</label>
            <input type="text" id="type" className='form-control' value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
              <label htmlFor="muscle" className='form-label'>Muscle:</label>
            <input type="text" id="muscle" className='form-control' value={muscle} onChange={(e) => setMuscle(e.target.value)} />
          </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label htmlFor="equipment" className='form-label'>Equipment:</label>
            <input type="text" id="equipment" className='form-control' value={equipment} onChange={(e) => setEquipment(e.target.value)} />
          </div>
          </div>
          </div>
          <div className='mb-3'>
            <label htmlFor="difficulty" className='form-label'>Difficulty:</label>
            <select name="difficulty" id="dropdown" className='form-control' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
            </select>
          </div>
          <div className="text-center">
          <button type="submit" className="btn btn-dark">Submit</button>
          </div>
        </form>
        </div>
      )}

      {!showForm && (
        <div>
          <button onClick={handleReset}>Reset Form</button>
        </div>
      )}

      <div className="row">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div key={exercise.id} className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{exercise.name}</h5>
                  <p className="card-text">
                    Type: {exercise.type}<br />
                    Muscle: {exercise.muscle}<br />
                    Equipment: {exercise.equipment}<br />
                    Difficulty: {exercise.difficulty}<br />
                  </p>
                  <p className="card-text">{exercise.instructions}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ExerciseList;
