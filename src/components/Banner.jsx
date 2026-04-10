import React from "react";
import bgLarge from "../assets/images/bg-today-large.svg";
import bgSmall from "../assets/images/bg-today-small.svg";

import IconSunny from "../assets/images/icon-sunny.webp";

export default function Banner() {
  const place = "Place";
  const datetime = "Tuesday, Aug 4, 2025";
  const temp = "20°";

  //   const handleImageTime = () => {
  //     const place = !isImperial;

  //     setIsImperial(Metric);

  //     if (Metric) {
  //       setSelectedTemp("Fahrenheit (°F)");
  //       setSelectedPrec("Inches (in)");
  //     } else {
  //       setSelectedTemp("Celsius (°C)");
  //       setSelectedPrec("Millimeters (mm)");
  //     }
  //   };

  return (
    <div className="relative w-2/3 h-60 mx-6 lg:mx-0 flex flex-col items-center justify-center z-1 p-6">
      <img
        src={bgLarge}
        alt="banner background"
        className="absolute inset-0 w-full object-contain"
      />

      <div className="relative flex flex-col lg:flex-row justify-between lg:items-center w-full h-full">
        <div className="flex flex-col gap-1 lg:items-start ">
          <h2 className="!text-3xl">{place}</h2>
          <p>{datetime}</p>
        </div>
        <div className="flex flex-row items-center">
          <img src={IconSunny} className="h-28" />
          <h1 className="text-white !text-7xl">{temp}</h1>
        </div>
      </div>
    </div>
  );
}
