import React from "react";

export const Job = ({ company, vacancy, country, logo, avatar1, avatar2 }) => {
  return (
    <div className="job">
      <div className="company">
        <img src={logo} alt="" />
      </div>
      <div className="companyTitle">{company}</div>
      <div className="avatars">
        <img className="avatarFirst" src={avatar1} alt="" />
        <img className="avatarSecond" src={avatar2} alt="" />
        <div className="imgPlus">5+</div>
      </div>
      <div className="vacancy">{vacancy}</div>
      <div className="country">{country}</div>
      <button className="jobButton left">Remote</button>
      <button className="jobButton right">Anywhere</button>
      <div className="salary">$10k - $25k</div>
    </div>
  );
};


