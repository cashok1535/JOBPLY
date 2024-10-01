import React from "react";
import { Button } from "./Button";

export const HeaderInfo = () => {
  return (
    <div className="headerInfo">
      <div className="headerBackground"></div>
      <div className="Info">
        <div className="infoTitle">Find & Apply For Your Dream Job</div>
        <div className="infoText">
          The website is chockablock with useful features, allowing you to efficiently search and
          apply for roles across all sectors, experience levels and locations.
        </div>
        <form className="headerForm">
          <input placeholder="Job title or Keyword" className="headerFormInput search"></input>
          <div className="line"></div>
          <input placeholder="Location" className="headerFormInput location"></input>
          <Button className="inputButton" text="Search" />
        </form>
      </div>
    </div>
  );
};
