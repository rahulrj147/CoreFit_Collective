import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import ExercisesSearch from '../components/ExercisesSearch';
import Startbanner from '../components/StartBanner';
import Navbar from '../components/Navbar';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div >
      <div className='bg-banner-img' >
      <Navbar />
      <Startbanner />
      </div>
      <ExercisesSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  );
};

export default Home;