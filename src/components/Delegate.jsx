import React, { useState, useEffect } from "react";
import "./Delegate.css";
import { Alert, Space } from "antd";
import Person from "../assets/person.svg";
import Twitter from "../assets/partnerstwitter.svg";
import Favorite from "../assets/favorite.svg";
import Passage from "../assets/partners/passage.svg";
import Chainflow from "../assets/partners/chainflow.svg";
import alertsData from "./alertdata";
import Akash from "../assets/partners/akash.svg";
import Regen from "../assets/partners/regen.svg";
import Polygen from "../assets/partners/polygon.svg";
import Cosmos from "../assets/partners/cosmos.svg";

const Delegate = () => {
  const currentAlerts = alertsData.slice(0, 3);
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [alertsToShow, setAlertsToShow] = useState(currentAlerts);
  const [fixedAlertsCount, setFixedAlertsCount] = useState(3); // Number of fixed alerts initially

  const textsToType = ["Our", "Partners"];

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

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (fixedAlertsCount === 3) {
        index += 3;
        if(index > alertsData.length) index = 0;
        
        const currentAlerts = alertsData.slice(index, index+3);
        
        
        if (currentAlerts.length > 0) {
          setAlertsToShow(currentAlerts);
          setFixedAlertsCount(0); 
        }
      } else {
       
        setFixedAlertsCount(3);
      }
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main-delegate">
        <div className="main22-delegate">
          <div className="delegate-main-head">
            <div className="subleftdevelop1-delegate">
              <h1 style={{ fontFamily: "Libre Franklin" }}>
                {typedText} &nbsp;
                <span className="servicesdevelop">{typedText2}</span>
              </h1>
            </div>
            <div className="delegate-text-delegate">
              We are a core tech company passionate about the research and development of technology solutions that transform businesses and people’s work <br></br>styles.We are a core tech company passionate about the research and development of technology solutions that transform.
            </div>
            <div className="">
              <div className="partners-logo-1">
                <img src={Akash} alt="Akash" />
                <img src={Regen} alt="Regen" />
                <img src={Polygen} alt="Polygen" />
                <img src={Cosmos} alt="Cosmos" />
              </div>
              <div className="partners-logo-2">
                <img src={Chainflow} alt="Chainflow" />
                <img src={Cosmos} alt="Cosmoa" />
                <img src={Passage} alt="Passage" />
              </div>
            </div>
          </div>
          <div>
            <div className="bottom-text">
              Don’t just take our word for it! Here’s what people say about &nbsp;<span className="vitwit-text">Vitwit</span>
            </div>
            <div>
              <Space
                className="space-alert-dev space-x-8"
                direction=""
                style={{
                  width: "100%",
                }}
              >
                {alertsToShow.map((alert, index) => (
                  <Alert
                    key={index}
                    className="alert2001"
                    message={
                      <div className="flex justify-between">
                        <div className="flex space-x-2">
                          <img src={Person} alt="Person Image" />
                          <div className="">
                            <div className="Jack-Zampolin ">{alert.name}</div>
                            <span className="Jackk_1234">{alert.username}</span>
                          </div>
                        </div>
                        <img src={Twitter} alt="Twitter" />
                      </div>
                    }
                    description={
                      <div className="">
                        <span className="twitter-text">{alert.message}</span>
                        <div className="flex justify-between">
                          <div className="flex">
                            <img src={Favorite} alt="Favorite-icon" />
                            <p className="date-text">{alert.likes}</p>
                          </div>
                          <div className="date-text">{alert.date}</div>
                        </div>
                      </div>
                    }
                  />
                ))}
              </Space>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
