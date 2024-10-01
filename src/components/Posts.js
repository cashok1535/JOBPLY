import React, { useState } from "react";
import {Job} from "./Job";
import Group from "../img/Group.svg";
import google from "../img/google.svg";
import indeed from "../img/indeed.svg";
import paypal from "../img/paypal.svg";
import Avatar1 from "../img/Avatar1.png";
import Avatar2 from "../img/Avatar2.png";
import Avatar3 from "../img/Avatar3.png";
import Avatar4 from "../img/Avatar4.png";
import Avatar5 from "../img/Avatar5.png";
import Avatar6 from "../img/Avatar6.png";

const img = {
  GroupImg: Group,
  googleImg: google,
  indeedImg: indeed,
  paypalImg: paypal,
};
const avatars = {
  first: Avatar1,
  second: Avatar2,
  third: Avatar3,
  fourth: Avatar4,
  fives: Avatar5,
  sixth: Avatar6,
};

const job = [
  {
    company: "Slack",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.GroupImg,
    avatar1: avatars.first,
    avatar2: avatars.second,
  },
  {
    company: "Google",
    vacancy: "UX Researcher",
    country: "Full Time - United States",
    logo: img.googleImg,
    avatar1: avatars.third,
    avatar2: avatars.fourth,
  },
  {
    company: "Indeed",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.indeedImg,
    avatar1: avatars.fives,
    avatar2: avatars.sixth,
  },
  {
    company: "Slack",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.GroupImg,
    avatar1: avatars.first,
    avatar2: avatars.second,
  },
  {
    company: "Google",
    vacancy: "UX Researcher",
    country: "Full Time - United States",
    logo: img.googleImg,
    avatar1: avatars.third,
    avatar2: avatars.fourth,
  },
  {
    company: "Indeed",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.indeedImg,
    avatar1: avatars.fives,
    avatar2: avatars.sixth,
  },
  {
    company: "Slack",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.GroupImg,
    avatar1: avatars.first,
    avatar2: avatars.second,
  },
  {
    company: "Google",
    vacancy: "UX Researcher",
    country: "Full Time - United States",
    logo: img.googleImg,
    avatar1: avatars.third,
    avatar2: avatars.fourth,
  },
  {
    company: "Indeed",
    vacancy: "Sr. Product Designer",
    country: "Full Time - New York City",
    logo: img.indeedImg,
    avatar1: avatars.fives,
    avatar2: avatars.sixth,
  },
];

export const Posts = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className={`posts ${active ? "active" : "inActive"}`}>
      <div className="postsInfo">
        <div className="postTitle">Popular Job Posts</div>
        <div className={`postJobs ${active ? "active" : "inActive"}`}>
          {job.map((job, index) => (
            <Job
              company={job.company}
              vacancy={job.vacancy}
              country={job.country}
              logo={job.logo}
              avatar1={job.avatar1}
              avatar2={job.avatar2}
              key={index}
            />
          ))}
        </div>
        <div className="viewParent">
          <button className="view" onClick={handleClick}>
            View All
          </button>
        </div>
      </div>
    </div>
  );
};


