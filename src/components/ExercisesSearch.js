import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ScrollbarHere from './ScrollbarHere';

const ExercisesSearch = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
  try{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
  }catch(e){
    console.log("Error to found bodyParts")
  } 
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
     try{
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
     }catch (e){
        console.log("Error on searchExercise")
       }

      
    }
  };

  return (
    <div className="flex flex-col items-center  justify-center p-[20px]  bg-black  ">
      <h1 className="font-bold text-center text-[30px] lg:text-[44px] mb-[50px] text-gray-400 ">
      Key Moves <br>
      </br>  <span className='font-josefin font-extrabold' >  You Can't Miss</span>
      </h1>
      <div className="relative mb-[72px]">
        <input
          className="w-[350px] lg:w-[800px] h-[56px] bg-gray-800 font-bold text-white text-xl  rounded-xl px-7 "
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="bg-blue-600 text-white text-[14px] lg:text-[20px] h-[56px] px-7 rounded-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="scrollmenu relative w-full  p-[20px]">
        <ScrollbarHere data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </div>
    </div>
  );
};

export default ExercisesSearch;