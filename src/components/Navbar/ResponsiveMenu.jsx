import React from "react";
import Hamburger from "./Hamburger";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#12002f] transform transition-transform duration-500 ease-in-out ${
        open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      style={{ zIndex: 999 }} // Ensure the menu appears above other content
    >
      <div className="flex flex-col items-center pt-32 space-y-4">
        {/* Hamburger button */}
        <div className="absolute top-4 right-4">
          <Hamburger isActive={open} toggle={() => setOpen(!open)} />
        </div>
        {["Home", "Projects", "About Me", "Skills", "Experience"].map((menu) => (
          <a
            key={menu}
            href={`#${menu.toLowerCase().replace(/\s+/g, '-')}`}
            className="block w-full max-w-xs text-center py-3 px-4 bg-[#1f103f] text-white hover:bg-[#24104f] transition duration-200 rounded"
            onClick={() => setOpen(false)} // Close the menu on link click
          >
            {menu}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
