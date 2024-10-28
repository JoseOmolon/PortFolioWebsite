import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import ResponsiveMenu from "./ResponsiveMenu";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const applyTheme = (theme) => {
    document.body.classList.toggle("dark", theme === "dark");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <div className="container flex justify-between items-center py-4">
        <img src="src/assets/JoseLogo.png" alt="Logo" className="h-12" />
        <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
          {["Home", "Projects", "About Me", "Skills", "Experience"].map((menu) => (
            <a key={menu} href={`#${menu.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-red-500 transition">
              {menu}
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
  );
};

export default Navbar;
