import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Information = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage,name: bodyPart},
    {icon: TargetImage,name: target },
    { icon: EquipmentImage, name: equipment},
  ];

  return (
    <div className="flex flex-col   lg:flex-row gap-15  pb-16 p-5 items-center bg-black ">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className="flex flex-col gap-9 lg:gap-5 ml-[50px] ">
        <h3 className="text-3xl sm:pt-10  uppercase font-extrabold font-serif text-blue-600  ">{name}</h3>
        <p className="text-lg text-white ">
          Exercises keep you strong. <spna className="font-bold uppercase" >{name}</spna> {` `}
          is one of the best exercises to target your <span className="font-bold uppercase" > {target} </span> It will help you improve your
          mood and gain energy.
        </p>
        {extraDetail.map((item) => (
          <div key={item.name} className="flex flex-row gap-6 items-center">
            <button className="bg-[#FFF2DB] rounded-full w-25 h-25 flex items-center justify-center">
              <img src={item.icon} alt={bodyPart} className="w-12 h-12" />
            </button>
            <h5 className="text-xl uppercase font-serif font-bold text-white ">{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;