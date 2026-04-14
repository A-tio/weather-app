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
    <div className="relative w-full ">
      <img
        src={bgSmall}
        alt="banner background small"
        className="w-full h-full block md:hidden"
      />

      <img
        src={bgLarge}
        alt="banner background"
        className="w-full hidden md:block"
      />
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-between items-center p-6">
        <div className="flex flex-col gap-1 md:items-start ">
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
