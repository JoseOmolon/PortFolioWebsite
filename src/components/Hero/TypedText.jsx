// TypedText.jsx
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
    strings: ["I have over a decade of experience in the Tech Industry","I am an innovative problem-solver", "I'm a collaborative team player", "Interested?", "Hire me, let's talk..", "Click on the links below:"],
      typeSpeed: 100,
      backSpeed: 1,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p className="text-base sm:text-lg md:text-xl font-roboto hacker-text">
      <span ref={typedElement} />
    </p>
  );
};

export default TypedText;
