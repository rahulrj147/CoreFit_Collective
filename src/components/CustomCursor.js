import React, { useState, useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", updateCursor);

    return () => {
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="revolving-circle"></div>
    </div>
  );
};

export default CustomCursor;
