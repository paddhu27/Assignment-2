import React, { useState, useEffect } from "react";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import TelegramLogo from "../assets/social-icons/telegram.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import PersonIcon from "../assets/person-icon.svg";
import EmailIcon from "../assets/gmail.svg";
import "./Letstalk.css";

const Letstalk = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Let's", "Talk"];

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
    <div className="letstalk-main">
      <div className="right-letstalk">
        <div className="letstalk-head">
          <div className="lets-text">
            {typedText} <span className="talk-text">{typedText2}</span>
          </div>
          <p className="letstalk-para-text">
            {" "}
            Feel free to conatct us by filling this form or you can even reach
            us out <p className="">from the social media links below.</p>
          </p>
          <SocialIcons />
        </div>
      </div>
      <div className="left-letstalk form-bg">
        <div className="">
          <form onSubmit={handleSubmit} className=" space-y-10">
            <div className="letstalk-form">
              <div className="flex gap-2  ">
                <div className="text-field-bg">
                  <div className="gap-2 flex">
                    <img className="" src={PersonIcon} alt="Person Icon" />
                    <p className="nav-text">Name</p>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      style={{ background: "none", margin: 0, width: "70%" }}
                    />
                  </div>
                </div>
                <div className="text-field-bg">
                  <div className=" flex gap-2">
                    <img className="" src={EmailIcon} alt="Person Icon" />
                    <p className="nav-text">Email</p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      style={{ background: "none", margin: 0, width: "70%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-field-bg">
              <div className="">
                <p className="nav-text text-left p-2">Message</p>
                <input
                  type="memo"
                  id="memo"
                  name="memo"
                  required
                  style={{ background: "none" }}
                  className="h-[142px] w-[100%]"
                />
              </div>
            </div>
            <button className="send-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Letstalk;

const SocialIcons = () => {
  return (
    <div className="flex gap-6">
      <SocialLink link="https://www.github.com" icon={GithubLogo} />
      <SocialLink link="https://www.linkedin.com" icon={LinkedInLogo} />
      <SocialLink link="https://www.telegram.com" icon={TelegramLogo} className="w-2 h-2"/>
      <SocialLink link="https://www.twitter.com" icon={TwitterLogo} />
    </div>
  );
};

const SocialLink = ({ link, icon }) => {
  return (
    <div className="contact__socials items-center flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img className="contact__socials__icon" src={icon} alt="Social Icon" />
      </a>
    </div>
  );
};
