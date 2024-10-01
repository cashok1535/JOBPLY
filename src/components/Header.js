import React from "react";
import {HeaderNavbar} from "./HeaderNavbar";
import {HeaderInfo} from "./HeaderInfo";
import {HeaderImg} from "./HeaderImg";

export const Header = () => {
  return (
    <header className="header">
      <HeaderNavbar />
      <div className="headerinfoAll">
        <HeaderInfo />
        <HeaderImg />
      </div>
    </header>
  );
};


