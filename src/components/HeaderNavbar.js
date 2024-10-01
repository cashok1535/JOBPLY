import React from "react";
import {Button} from "./Button";
import logo from "../img/Jobply.svg"

export function HeaderNavbar() {
  return (
    <div className="headerNavbar">
      <img src={logo} className="logo" alt="" />
      <div className="navbar">
        <a href="&" className="navbarElement">Home</a>
        <a href="&" className="navbarElement">Categories</a>
        <a href="&" className="navbarElement">Service </a>
        <a href="&" className="navbarElement">Jobs</a>
      </div>
      <Button text="Post a Vacancy" />
    </div>
  );
}


