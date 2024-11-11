import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaHome, FaProjectDiagram, FaUserAlt, FaClipboardList, FaBriefcase } from "react-icons/fa";

import ResponsiveMenu from "./ResponsiveMenu";
import Hamburger from "./Hamburger";
import StarrySky from "../StarrySky/StarrySky"; // Import your StarrySky component

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark");

  const applyTheme = (newTheme) => {
    document.body.style.color = newTheme === "dark" ? "white" : "black"; 
    document.body.style.backgroundColor = newTheme === "dark" ? "#1f103f" : "#D8C4A0";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Define menu items with corresponding icons
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "About Me", icon: <FaUserAlt /> },
    { name: "Skills", icon: <FaClipboardList /> },
    { name: "Experience", icon: <FaBriefcase /> },
  ];

  return (
    <section className="relative inline-block w-full">
      <nav className="bg-transparent font-poppins z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <img src="Public/assets/JoseLogo.png" alt="Logo" className="h-12" />
          <div className="hidden md:flex items-center space-x-6 text-pretty font-light">
            {menuItems.map(({ name, icon }) => (
              <a
                key={name}
                href={`#${name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center hover:text-red-500 transition"
              >
                {icon}
                <span className="ml-2">{name}</span>
              </a>
            ))}
            <button onClick={toggleTheme} className="text-xl p-2 rounded focus:outline-none">
              {theme === "light" ? <BsMoon /> : <BsSun />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="text-xl p-2 rounded focus:outline-none">
              {theme === "light" ? <BsMoon /> : <BsSun />}
            </button>
            <Hamburger isActive={open} toggle={() => setOpen(!open)} />
          </div>
        </div>
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </nav>
      <StarrySky isDarkMode={theme === "dark"} />
    </section>
  );
};

export default Navbar;
