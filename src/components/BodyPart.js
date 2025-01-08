import React from 'react';
import Icon from '../assets/icons/42807.jpg';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <button
    type="button"
    className={`flex flex-col items-center justify-center bg-gray-800 rounded-bl-[80px] rounded-tr-[80px] w-[270px] h-[282px] cursor-none gap-[47px] transition-transform transform hover:scale-110 hover:bg-gray-700 ${bodyPart === item ? 'border-t-4 border-blue-600' : ''}`}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1500, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-[60px] h-[60px]" />
    <span className="text-[24px] font-extrabold  text-gray-100 capitalize">{item}</span>
  </button>
);

export default BodyPart;
