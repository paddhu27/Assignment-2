import React, { useState, useEffect } from "react";

const Backtotop = () => {
  const [backtoTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backtoTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "30px",
            color: "white",
          }}
          title="BacktoTop" 
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default Backtotop;
