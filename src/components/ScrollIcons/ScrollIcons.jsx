import { useState, useEffect } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa6";
import ContactModal from '../Hero/ContactModal';

const ScrollIcons = () => {
  const [showMailIcon, setShowMailIcon] = useState(false);
  const [showScrollUpIcon, setShowScrollUpIcon] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleScroll = () => {
    setShowMailIcon(window.scrollY > 300);
    setShowScrollUpIcon(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showMailIcon && (
        <div
          onClick={() => setModalOpen(true)}
          className="fixed bottom-32 right-6 bg-lime-500 p-4 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110 z-50"
        >
          <RiMessage2Line className="text-white text-2xl" />
        </div>
      )}
      {showScrollUpIcon && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 left-10 bg-blue-500 p-4 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110 z-50"
        >
          <FaHandPointUp className="text-white text-2xl" />
        </div>
      )}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default ScrollIcons;
