import React, { useState, useEffect } from "react";
import "./Infrastructure.css";
import { Alert } from "antd";

import Cosmos from "../assets/infra-icons/comos-infra.png";
import Polygen from "../assets/infra-icons/polygon-infra.png";
import Osmosis from "../assets/infra-icons/osmosis-infra.png";
import Akash from "../assets/infra-icons/akash-infra.png";
import Passage from "../assets/infra-icons/passage-infra.png";
import Stargaze from "../assets/infra-icons/stargaze-infra.png";
import Regen from "../assets/infra-icons/regen-infra.png";
import Umee from "../assets/infra-icons/umee-infra.png";
import Evmos from "../assets/infra-icons/evmos-infra.png";
import Agoric from "../assets/infra-icons/agoric-infra.png";
import Oasis from "../assets/infra-icons/oasis-infra.png";
import Mainnet from "../assets/mainnet.svg";
import Devops from "../assets/devops.svg";
import WhiteLabelinfra from "../assets/whitelabelinfra.svg";

const LOGOS = [
  {
    name: "Cosmos Hub",
    icon: Cosmos,
    size: 58,
    bgColor: "#393F68",
    
  },
  {
    name: "Polygen",
    icon: Polygen,
    size: 62,
    bgColor: "#9757da",
  },
  {
    name: "Osmosis",
    icon: Osmosis,
    size: 62,
    bgColor: "#a289bf",
  },
  {
    name: "Akash",
    icon: Akash,
    size: 62,
    bgColor: "#ed3524",
  },
  {
    name: "Passage",
    icon: Passage,
    size: 62,
    bgColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "Oasis",
    icon: Oasis,
    size: 62,
    bgColor: " #00c6eb",
  },
  {
    name: "Stargaze",
    icon: Stargaze,
    size: 58,
    bgColor: "#c8dc7c",
  },
  {
    name: "Regen",
    icon: Regen,
    size: 58,
    bgColor: "#9bd5af",
  },
  {
    name: "Umee",
    icon: Umee,
    size: 62,
    bgColor: "#e0b0ff",
  },
  {
    name: "Evmos",
    icon: Evmos,
    size: 58,
    bgColor: "#f1705b",
  },
  {
    name: "Agoric",
    icon: Agoric,
    size: 58,
    bgColor: "#7D1729",
  },
  {
    name: "10+ More",
    icon: "",
    size: 62,
    bgColor: "",
  },
];
const Infrastructure = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Infrastructure", "Services"];

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
      <div className="infrastructure">
        <div className="infrastructure-main-head">
          <div className="infrastructure-services-h1">
            <h1>
              {typedText} &nbsp;
              <span className="infrastructure-services">{typedText2}</span>
            </h1>
          </div>

          <div className="infrastructure-text">
            We are a core tech company passionate about the research and
            development of technology solutions that transform businesses and
            people’s work <br></br>styles.We are a core tech company passionate about the
            research and development of technology solutions that transform
            businesses and people’s<br></br> work styles.
          </div>
        </div>
        <div className="bottom-infrastructure">
          <div className="infrastructure-left">
            <div className="alert-right1-infra">
              <Alert
                className="alert3001 border-none"
                message={
                  <div className="">
                    <div className="mainnet-dot mb-3">
                      <img src={Mainnet} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Mainnet, Testnet strategy
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%", // width: "60%",
                  // height: "40%",
                }}
              />

              <Alert
                className="alert3002 border-none"
                message={
                  <div>
                    <div className="whitelabel-dot mb-3">
                      <img src={WhiteLabelinfra} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      White-label infrastructure hosting
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%", //width: "60%",
                  // height: "45%",
                }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="enterprise-dot mb-3">
                      <img src={Devops} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Enterprise-grade infrastructure
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
          </div>
          <div className="right-infra">
            <div className="grid grid-cols-3 gap-x-6 gap-y-14">
              {LOGOS.map((logo, logoId) => (
                <div key={logoId} className={`${logo.bgColor.length === 0? "cursor-pointer":"cursor-default"}`}>
                  <div className="comsos-logo-style">
                    {logo.icon && (
                      <img src={logo.icon} alt={`${logo.name}-logo`} height={logo.size} width={logo.size} />
                    )}
                  </div>
                  <div>
                    <button
                      className="cosmos infra-icons-text"
                      style={{ backgroundColor: logo.bgColor }}
                    >
                      {logo.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="">
              <button className="infra-btn infra-icons-text">
                Stake with VITWIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
