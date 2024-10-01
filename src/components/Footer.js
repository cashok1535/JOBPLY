import React from "react";
import footerDots from "../img/FooterDots.svg";
import footerManyDots from "../img/FooterManyDots.svg";
import logo from "../img/Jobply.svg";
import Facebook from "../img/Facebook.svg";
import Twitter from "../img/Twitter.svg";
import Linkedin from "../img/Linkedin.svg";
import FirstNews from "../img/FirstNews.png";
import SecondNews from "../img/SecondNews.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <img className="fotterDots" src={footerDots} alt="" />
      <img className="fotterDotsMany" src={footerManyDots} alt="" />
      <div className="footerFlex">
        <div className="footerFlexElement First">
          <img src={logo} alt="" />
          <div className="footerText ">152/3 , Western Road, New York</div>
          <div className="footerText phoneNumber">Call Us: +99-8569-5234</div>
          <div className="elementSocials">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
        <div className="footerFlexElement">
          <div className="footerTitle">Explore</div>
          <a href="&" className="footerText activeFooter">
            Featured Job
          </a>
          <a href="&" className="footerText activeFooter">
            Recent Job Post
          </a>
          <a href="&" className="footerText activeFooter">
            Total Candidates
          </a>
          <a href="&" className="footerText activeFooter">
            Support
          </a>
        </div>
        <div className="footerFlexElement">
          <div className="footerTitle">Useful Link</div>
          <a href="&" className="footerText activeFooter">
            About Us
          </a>
          <a href="&" className="footerText activeFooter">
            Blog
          </a>
          <a href="&" className="footerText activeFooter">
            Company
          </a>
          <a href="&" className="footerText activeFooter">
            Contact Us
          </a>
        </div>
        <div className="footerFlexElement">
          <div className="footerTitle">Latest News</div>
          <div className="elementNews">
            <img src={FirstNews} alt="" />
            <div className="newsInfo">
              <div className="newsText">Understanding the Cybersecurity Landscape in 2021</div>
              <div className="newsData">21 June, 2021</div>
            </div>
          </div>
          <div className="elementNews">
            <img src={SecondNews} alt="" />
            <div className="newsInfo">
              <div className="newsText">How to Design for Maximum Product Trust</div>
              <div className="newsData">21 June, 2021</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright 2021, All right reserved</div>
    </footer>
  );
};
