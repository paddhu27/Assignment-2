import React, { useRef } from "react";
import LoginIn from "../assets/login-icon.png";
import "./Resolute.css";

const Resolute = () => {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  // Auto play the videos when they are loaded
  const handleVideoAutoPlay = (videoRef) => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="resolute">
      <div className="maindevelop-resolute">
        <video
          autoPlay
          muted
          loop
          ref={videoRef1}
          className="myVideores"
          onLoadedData={() => handleVideoAutoPlay(videoRef1)}
        >
          <source
            src={process.env.PUBLIC_URL + "/videos/background-video.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="leftdevelop-resolute flex left-bg w-full ">
          <div className=" text pl-10">
            <div className="py-10 ">
              <span className="text-style-1 ">Resolute</span>
              <span className="Resolute-Interchain-Interface">
                Interchain Interface
              </span>
            </div>
            <div className="text-frame">
              <p>
                We are a core tech company passionate about the research and
                development of technology solutions that transform
                businesses.chnology solutions that transaction.
              </p>
              <br />
              <p>
                We are a core tech company passionate about the research and
                development of techn`ology solutions that transform
                businesses.chnology solutions that transaction. We are a core
                tech company passionate about the research and development of
                technology solutions that transform businesses.chnology
                solutions that transaction.
              </p>
            </div>

            <div className="pb-10">
              <button className="resolute-btn cursor-pointer">
                Connect to resolute
              </button>
            </div>
          </div>
          <div className="RightDevelop-delegate">
            <video
              autoPlay
              muted
              loop
              ref={videoRef2}
              className="myVideop"
              onLoadedData={() => handleVideoAutoPlay(videoRef2)}
            >
              <source
                src={process.env.PUBLIC_URL + "/videos/resolute-video.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resolute;
