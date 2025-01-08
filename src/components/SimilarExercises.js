import React from 'react';
import ScrollbarHere from './ScrollbarHere';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-[0px] lg:mt-[0px] py-[60px] border-t-2 bg-black ">
    <h2 className="text-[25px] lg:text-[44px] font-bold text-white mb-[33px]  text-center ml-[20px]">
      Similar <span className="text-blue-600 capitalize">Target Muscle</span> exercises
    </h2>
    <div className="flex flex-row p-2 relative">
      {targetMuscleExercises.length !== 0 ? <ScrollbarHere data={targetMuscleExercises} /> : <Loader />}
    </div>
    <h2 className="text-[25px] lg:text-[44px] font-bold text-center text-white mb-[33px] ml-[20px] mt-[60px] lg:mt-[100px]">
      Similar <span className="text-blue-600 capitalize">Equipment</span> exercises
    </h2>
    <div className="flex flex-row p-2 relative">
      {equipmentExercises.length !== 0 ? <ScrollbarHere data={equipmentExercises} /> : <Loader />}
    </div>
  </div>
);

export default SimilarExercises;