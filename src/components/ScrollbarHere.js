// import React, { useContext } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const ScrollbarHere = ({ data, bodyPart, setBodyPart }) => (
  
    <ScrollMenu  >
    {data.map((item) => (
      <div
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        className="m-4"
      >
        {bodyPart ? (
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </div>
    ))}
  </ScrollMenu>
 
);

export default ScrollbarHere;