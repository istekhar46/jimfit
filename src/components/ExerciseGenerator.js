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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          <div>
            <label htmlFor="muscle">Muscle:</label>
            <input type="text" id="muscle" value={muscle} onChange={(e) => setMuscle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="equipment">Equipment:</label>
            <input type="text" id="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
          </div>
          <div>
            <label htmlFor="difficulty">Difficulty:</label>
            <input type="text" id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
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
          <p>No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseList;
