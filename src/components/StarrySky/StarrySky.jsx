import React, { useEffect, useState } from "react";
import anime from "animejs";
import "./StarrySky.css";

const StarrySky = ({ isDarkMode }) => {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    anime({
      targets: "#sky .star",
      opacity: [{ duration: 400, value: "0" }, { duration: 400, value: "1" }],
      easing: "linear",
      loop: true,
      delay: (_, i) => 10 * i, // Increased frequency
    });
  
    anime({
      targets: "#shootingstars .wish",
      easing: "linear",
      loop: true,
      delay: (_, i) => 200 * i, // Increased frequency of shooting stars
      opacity: [{ duration: 500, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  }, [isDarkMode]);

  const randomRadius = () => Math.random() * 0.7 + 0.6;
  const getRandomX = () => Math.random() * vw;
  const getRandomY = () => Math.random() * vh;

  return (
    <div id="starry-sky" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <svg id="sky">
        {[...Array(60)].map((_, i) => (
          <circle
            key={i}
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            fill={isDarkMode ? "white" : "grey"}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {[...Array(10)].map((_, i) => (
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
