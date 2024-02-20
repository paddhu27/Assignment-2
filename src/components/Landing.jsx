import React, { useState, useEffect, useRef } from "react";
import "./Landing.css";
import LandingImage from "../assets/landing-image.png";

const Landing = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const videoRef = useRef();
  const textsToType = ["Dream.", "Define.", "Establish."];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    if (videoRef.current) {
      videoRef.current.play();
    }
    const typingInterval = setInterval(() => {
      if (textsToType[textIndex].length === charIndex && textIndex === 2) {
        clearInterval(typingInterval);
      } else if (charIndex === textsToType[textIndex].length) {
        charIndex = 0;
        textIndex++;
      } else if (textIndex === 2) {
        charIndex++;
        setTypedText3(textsToType[2].slice(0, charIndex));
      } else if (textIndex === 1) {
        charIndex++;
        setTypedText2(textsToType[1].slice(0, charIndex));
      } else {
        charIndex++;
        setTypedText(textsToType[0].slice(0, charIndex));
      }
    }, 200); // Adjust the typing speed by changing the interval

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="main22-landing">
      {/* maindevelop cantioner start */}
      <div className="maindevelop-landing">
        <video autoplay muted loop ref={videoRef} className="myVideo">
          <source
            src={process.env.PUBLIC_URL + "/videos/background-video.mp4"}
            type="video/mp4"
          />
        </video>
        {/* leftdevelop cantioner start */}
        <div className="leftdevelop-landing">
          <div className="subleftdevelop1-landing">
            <h1>
              {typedText} &nbsp;
              <span className="servicesdevelop-landing">{typedText2} </span>
              &nbsp;
              {typedText3}
            </h1>
          </div>
          <div className="landing-text-main">
            <div className="landing-text-para">
              We are a core tech company passionate about the research and
              development of technology solutions that transform businesses and
              people’s work styles.
            </div>
          </div>
          <div>
            <button className="landing-btn-main mx-auto">
              Connect With Us
            </button>
          </div>
        </div>
        {/* leftdevelop cantioner end */}

        {/* RightDevelop cantioner start */}
        {/* <div className="RightDevelop-landing animated-image">
          <img src={LandingImage} alt="Landing-Image" />
        </div> */}
        {/*RightDevelop cantioner end */}
      </div>
      {/* maindevelop cantioner end */}
    </div>
  );
};

export default Landing;
