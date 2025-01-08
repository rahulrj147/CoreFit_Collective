import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card bg-gray-800  border-t-4  rounded-bl-[20px]" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className="w-full h-[250px] object-cover" />
    <div className="flex flex-row ml-[21px] mt-[10px]">
      <button className="ml-[0px] text-white bg-purple-900 text-[14px] font-bold rounded-[20px] uppercase px-4 py-1">
        {exercise.bodyPart}
      </button>
      <button className="ml-[10px] font-bold  text-black bg-yellow-400 text-[14px] rounded-[20px] uppercase px-4 py-1">
        {exercise.target}
      </button>
    </div>
    <p className="ml-[21px] text-gray-200 font-bold text-[22px] mt-[18px] underline  pb-[10px] uppercase">
      {exercise.name}
    </p>
  </Link>
);

export default ExerciseCard;