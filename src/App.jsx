import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import StarrySky from "./components/StarrySky/StarrySky";
import Projects from "./components/Projects/Projects"
import ScrollIcons from "./components/ScrollIcons/ScrollIcons";
import About from "./components/About/About";
import SkillsCarousel from "./components/SkillsCarousel/SkillsCarousel";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Directly set body class for theme
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <StarrySky isDarkMode={theme === "dark"} />
      <Hero />
      <Projects />
      <About />
      <SkillsCarousel />
      <ExperienceTimeline />
      <ScrollIcons />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
