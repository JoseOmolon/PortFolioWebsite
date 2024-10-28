// TypedText.jsx
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
    strings: ["Experienced in the Tech Industry for over a decade","innovative problem-solver", "collaborative team player", "driven by results"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <p className="text-base sm:text-lg md:text-xl font-roboto hacker-text">
      I am <span ref={typedElement} />
    </p>
  );
};

export default TypedText;
