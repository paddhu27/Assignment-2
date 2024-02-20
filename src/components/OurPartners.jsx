import React, { useState, useEffect } from "react";
import "./Ourpartners.css";
import { Alert, Space } from "antd";

import Engineering from "../assets/delegateus/engineering.svg";
import Enterprise from "../assets/delegateus/enterprise.svg";
import Security from "../assets/delegateus/security.svg";
import Infrastructure from "../assets/delegateus/infrastructure.svg";
const OurPartners = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Why Delegate to", "Us ?"];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (textsToType[textIndex].length === charIndex && textIndex === 1) {
        clearInterval(typingInterval);
      } else if (textIndex === 0 && charIndex === textsToType[0].length) {
        charIndex = 0;
        textIndex++;
      } else if (textIndex === 1) {
        charIndex++;
        setTypedText2(textsToType[1].slice(0, charIndex));
      } else {
        charIndex++;
        setTypedText(textsToType[0].slice(0, charIndex));
      }
    }, 200);
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <>
      <div className="main22-ourpartners">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-partners">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-partners">
            <div className="subleftdevelop1-partners">
              <h1>
                {typedText}
                <br></br>
                <span className="servicesdevelop">{typedText2}</span>
              </h1>
            </div>
            <div className="ourpartners-text">
              <p>
                We are a core tech company passionate about the research and
                <br></br>
                development of technology solutions that transform businesses
                <br></br>
                and people’s work styles.
              </p>
            </div>
            <div className="figma2001-partners">
              <div className="flex mt-10">
                <div className="flex flex-col">
                  <div className="dot4 flex flex-col justify-center items-center">
                    <span className="text-2xl">
                      4<span className="text-[rgba(255,255,255,0.40)]">+</span>{" "}
                    </span>
                    <span className="text-sm">Total Networks</span>
                  </div>
                  <div className="dot1 flex flex-col justify-center items-center">
                    <span className="text-5xl">
                      4 <span className="text-[rgba(255,255,255,0.40)]">+</span>{" "}
                    </span>
                    <span className="text-sm">Total Networks</span>
                  </div>

                  <div className="dot5 flex flex-col justify-center items-center">
                    <span className="text-lg">
                      {" "}
                      4 <span className="text-[rgba(255,255,255,0.40)]">
                        +
                      </span>{" "}
                      <br></br>
                    </span>
                    <span className="text-xs">Total Networks</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="dot2 flex flex-col justify-center items-center">
                    <span className="text-3xl	">
                      {" "}
                      4<span className="text-[rgba(255,255,255,0.40)]">
                        {" "}
                        +
                      </span>{" "}
                    </span>

                    <span className="text-sm">Total Networks</span>
                  </div>
                  <div className="dot3 flex flex-col justify-center items-center">
                    <span className="text-lg	">
                      {" "}
                      4<span className="text-[rgba(255,255,255,0.40)]">
                        {" "}
                        +
                      </span>{" "}
                    </span>

                    <span className="text-sm">Total Networks</span>
                  </div>
                </div>
              </div>

              <span className="dot6"></span>
              <span className="dot7"></span>
              <span className="dot8"></span>
              <span className="dot9"></span>
              <span className="dot10"></span>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-partners">
            <div className="subleftdevelop2-partners">
              <Space
                className="space-alert-dev"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <div className="alert-main">
                  <div className="alert-right1-partners">
                    <Alert
                      className="alert2001 border-none"
                      message={
                        <>
                          <div className="eng-dot mb-3">
                            <img
                              className=""
                              src={Infrastructure}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">Infrastructure</span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />

                    <Alert
                      className="alert2002"
                      message={
                        <>
                          <div className="eng-dot4 mb-3">
                            <img
                              className=""
                              src={Enterprise}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">
                            Enterprise-grade infrastructure
                          </span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />
                  </div>

                  <div className="alert-right2-partners ml-6">
                    <Alert
                      className="alert2003"
                      message={
                        <>
                          <div className="eng-dot2 mb-3">
                            <img
                              className=""
                              src={Engineering}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">Engineering</span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />
                    <Alert
                      className="alert2004"
                      message={
                        <>
                          <div className="eng-dot3 mb-3">
                            <img
                              className=""
                              src={Security}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">
                            Security, Monitoring & Alerting
                          </span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      // style={{ marginLeft: "30%" }}
                    />
                  </div>
                </div>
              </Space>
            </div>
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
    </>
  );
};

export default OurPartners;
