// import { wrap } from 'module';
import React, { useState,useEffect } from "react";

const ExerciseList = (props) => {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [muscle, setMuscle] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();

    if (name) queryParams.append("name", name);
    if (type) queryParams.append("type", type);
    if (muscle) queryParams.append("muscle", muscle);
    if (difficulty) queryParams.append("difficulty", difficulty);

    const queryString = queryParams.toString();
    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?${queryString}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "da44104637msh36f860226755d36p1ec7f0jsnd237cb9ccc01",
        "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
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
    setName("");
    setType("");
    setMuscle("");
    setDifficulty("");
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

const typeOptions = [
      'cardio',
'olympic_weightlifting',
'plyometrics',
'powerlifting',
'strength',
'stretching',
'strongman'
];
    const muscleOptions = [
      'abdominals',
      'abductors',
      'adductors',
      'biceps',
      'calves',
      'chest',
      'forearms',
      'glutes',
      'hamstrings',
      'lats',
      'lower_back',
      'middle_back',
      'neck',
      'quadriceps',
      'traps',
      'triceps'
    ];

    useEffect(() => {
      props.setProgress(100)
    }, [])
  
  return (
    <div style={{ marginTop: "110px" }}>


      {showForm && (
        <div className="form-wrap p-2">
          <form onSubmit={handleSubmit}>
            <div className="container">
            <h2 className="text-center mb-4" style={{color:'#ff2625'}}>Exercise List</h2>

              <div className="row">
                <div className="col-md-6 ">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control m-0"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="type" className="form-label">
                      Type:
                    </label>
                    <select name="type" id="dropdown" className="form-control"
                      value={type}
                      onChange={(e) => setType(e.target.value)}>
                    <option value="">Select</option>

{typeOptions.map((typeOptions, index) => (

         <option key={index} value={typeOptions}>{typeOptions}</option>
       ))}
                    </select>



                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group">
                  <label htmlFor="muscle" className="form-label">
                      Muscle:
                    </label>
                    <select name="muscle" id="dropdown"   className="form-control"
                      value={muscle}
                      onChange={(e) => setMuscle(e.target.value)}
                    >
                        <option value="">Select</option>

 {muscleOptions.map((muscleOptions, index) => (

          <option key={index} value={muscleOptions}>{muscleOptions}</option>
        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                  <label htmlFor="difficulty" className="form-label">
                  Difficulty:
                </label>
                <select
                  name="difficulty"
                  id="dropdown"
                  className="form-control"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>



                </select>

                  </div>
                </div>
              </div>

              <div className="text-center d-grid gap-2 col-6 mx-auto">
                <button type="submit" className="btn btn-dark mt-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
 {!showForm && (
        <div className="text-center">
        <button onClick={handleReset} className="btn btn-dark">Reset Form</button>
      </div>
      )}
      {!showForm && exercises.length > 0 ? (
        <div className="row">
        <div className="col-12">
          <div className="card-columns" style={{ columnCount: 'auto', columnGap: '1rem' }}>
            {exercises.map((exercise) => (
              <div key={exercise.id} className="card mb-3">
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
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExerciseList;
