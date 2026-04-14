import React from "react";
import IconSunny from "../assets/images/icon-sunny.webp";

export default function HourlyList() {
  return (
    <div className="bg-btnselected border border-border rounded-lg px-2 py-3 w-full flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <img src={IconSunny} alt="weather icon" className="w-8" />
        <p>3 PM</p>
      </div>
      <p>20°</p>
    </div>
  );
}
