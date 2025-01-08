import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;
  return ( 
      <div className="mt-[0px] lg:mt-[0px] p-[20px] text-center bg-black border-t-2">
          <h2 className="text-[25px] lg:text-[44px] font-bold text-white mb-[33px]">
            Watch <span className="text-blue-600 capitalize">{name}</span> exercise videos
          </h2>
          <div className="flex flex-row justify-evenly flex-wrap sm:gap-8  ml-6 gap-[0px] lg:gap-[110px]">
            {exerciseVideos.slice(0, 3).map((item, index) => (
           
                <a
                key={index}
                className="flex flex-col  items-center sm:gap-3 lg:w-[400px] lg:h-[400px] sm:w-[200px] sm:h-[200px]"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="rounded-tl-[20px] lg:w-[300px] lg:h-[300px]  "
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <div>
                  <h3 className="text-[24px] sm:text-[14px]   lg:text-[18px] font-semibold text-white">
                    {item.video.title}
                  </h3>
                  <p className="text-[14px] sm:text-[12px]  text-white">{item.video.channelName}</p>
                </div>
              </a>))}
          </div>
          </div>
    )};
          
     
   


export default ExerciseVideos;
