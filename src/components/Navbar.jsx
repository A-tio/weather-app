import React, { Component } from "react";
import Logo from "../assets/images/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-red-400 flex justify-between py-4 items-center">
        <img src={Logo} alt="Logo of Weather Now" className="w-64 h-auto " />
        <div>a </div>
      </div>
    );
  }
}
