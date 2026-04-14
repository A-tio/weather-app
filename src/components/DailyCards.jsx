import React from "react";
import IconSunny from "../assets/images/icon-sunny.webp";

export default function DailyCards() {
  //   const dates = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col bg-btncolor rounded-lg border border-border p-4 gap-4 items-center w-full">
      <p>Tue</p>
      <img src={IconSunny} alt="weather icon" />
      <div className="flex flex-row justify-between">
        <p>20°</p>
        <p>2°</p>
      </div>
    </div>
  );
}
