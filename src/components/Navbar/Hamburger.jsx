import React from "react";

const Hamburger = ({ isActive, toggle }) => {
  return (
    <button
      className={`hamburger ${isActive ? "is-active" : ""} flex flex-col justify-center items-center w-10 h-10 cursor-pointer focus:outline-none`}
      onClick={toggle}
    >
      <span className="bar bg-white block h-1 w-full mb-1 transition-all duration-300 ease-in-out"></span>
      <span className="bar bg-white block h-1 w-full mb-1 transition-all duration-300 ease-in-out"></span>
      <span className="bar bg-white block h-1 w-full mb-1 transition-all duration-300 ease-in-out"></span>
    </button>
  );
};

export default Hamburger;
