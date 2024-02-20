import React, { useState, useEffect } from "react";
import "./Development.css";
import { Alert, Space } from "antd";

const Development = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Development", "Services"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const textIndex = Math.floor(scrollTop / 500) % 2; // Change text every 500 pixels scrolled

      setTypedText(textsToType[textIndex]);
      setTypedText2(""); // Reset typedText2
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main22-infra">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-infra">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-infra">
            <div className="subleftdevelop1-infra">
              <h1>
                {typedText}
                <br />
                <span className="servicesdevelop-infra">{typedText2}</span>
              </h1>
            </div>

            <div className="subleftdevelop2-infra">
              <Space
                className="space-alert-dev gap-10"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                {/* Alerts go here */}
              </Space>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-infra">
            <p className="development-alert-text mt-10">
              We are a core tech company passionate about the research and
              development of technology solutions that transform businesses and
              people’s work styles. We are a core tech company passionate about
              the research and development of technology solutions that transform.
            </p>

            <div className="figma2001-infra">
              {/* Circles go here */}
            </div>
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
      <br />
    </>
  );
};

export default Development;
