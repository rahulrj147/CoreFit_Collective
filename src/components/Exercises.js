import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      try{
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
      }catch(e){
        console.log("Error on fetchExercisesData")
      }

      setExercises(Array.isArray(exercisesData) ? exercisesData : []);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

 
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!exercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-[50px] lg:mt-[0px] p-[20px] bg-black ">
      <h3 className="text-3xl mb-[46px]">Showing Results</h3>
      <div className="flex flex-wrap justify-center gap-[50px] lg:gap-[110px]">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="mt-[100px] py-[20px] flex justify-center">
        <button
          className=" text-gray-200 rounded px-4 py-2 mx-1 w-24  bg-blue-600 hover:bg-blue-900 hover:scale-110 transition-transform transform "
          onClick={() => paginate(null, currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className=" bg-blue-600 text-gray-200 rounded px-4 w-24 py-2 mx-1 hover:bg-blue-900 hover:scale-110 transition-transform transform "
          onClick={() => paginate(null, currentPage + 1)}
          disabled={currentPage === Math.ceil(exercises.length / exercisesPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Exercises;