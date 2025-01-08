import React from 'react';

const Startbanner = () => (
  <div className="relative mt-[20px] lg:mt-[20px] sm:ml-[50px] ">
    <h1 className=" font-josefin font-extrabold text-[46px] text-white  "> <spna className="text-blue-800 " >CoreFit</spna> Collective</h1>
    <h2 className="font-extrabold text-[40px] lg:text-[44px] mb-[23px] mt-[30px] text-white ">
    Move, Motivate<br>
    </br> Transform
    </h2>
    <p className="text-[20px] font-bold mb-8 font-[Alegreya] leading-[35px] text-slate-300 ">
    Discover a world of workouts tailored just for you. <br></br>
     one step at a time!"
    </p>
    <div>
      <button onClick={()=>{window.scrollTo({ top: 1550, left: 100, behavior: 'smooth' })}} href="#exercises" className="w-[200px] text-center rounded-md bg-blue-600 p-[14px] text-[22px] shadow-gray-50 text-white ">
      Find Your Moves
      </button>
    </div>
    <h1 className="texting">
      Exercise
    </h1>
  </div>
);

export default Startbanner;