import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./StarrySky.css";

const StarrySky = () => {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Starry night animation
    anime({
      targets: "#sky .star",
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" },
      ],
      easing: "linear",
      loop: true,
      delay: (_, i) => 50 * i,
    });

    // Shooting stars animation
    anime({
      targets: "#shootingstars .wish",
      easing: "linear",
      loop: true,
      delay: (_, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  }, []);

  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const getRandomX = () => Math.random() * vw;
  const getRandomY = () => Math.random() * vh;

  return (
    <div id="starry-sky">
      <svg id="sky">
        {[...Array(60)].map((_, i) => (
          <circle
            key={i}
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            fill="white"
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="wish"
            style={{ left: `${getRandomX()}px`, top: `${getRandomY()}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
