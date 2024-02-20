import React from "react";
import MailLogo from "../assets/social-icons/mail.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import SkypeLogo from "../assets/social-icons/skype.png";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import VitwitLogo from "../assets/footer-vitwit-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-6">
          <img className="" src={VitwitLogo} alt="Vitwit Logo" />
          <p className="text-white text-sm font-normal leading-6 text-left">
          {" "}
            Feel free to conatct us by filling this form or you can even reach
            us out <p className="">from the social media links below.</p>
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-12">
          <div className="text-white text-xl not-italic font-bold leading-5 text-left">
            {" "}
            Join our community
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="flex items-center justify-center gap-6 nav-text">
        <p className="cursor-pointer">Privacy Policy</p>
        <p>@2023vitwit.com</p>
        <p className="cursor-pointer">Terms of use</p>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcons = () => {
  return (
    <div className="flex gap-6">
      <SocialLink link="https://www.gmail.com" icon={MailLogo} />
      <SocialLink link="https://www.youtube.com" icon={YoutubeLogo} />
      <SocialLink link="https://www.twitter.com" icon={SkypeLogo} />
      <SocialLink link="https://www.github.com" icon={GithubLogo} />
      <SocialLink link="https://www.linkedin.com" icon={LinkedInLogo} />
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
