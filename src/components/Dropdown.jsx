import { useState } from "react";
import CheckIcon from "../assets/images/icon-checkmark.svg";

function Dropdown({ title, icon1, icon2, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isImperial, setIsImperial] = useState(false);
  const [selectedTemp, setSelectedTemp] = useState("Celsius (°C)");
  const [selectedWindSpeed, setSelectedWindSpeed] = useState(null);
  const [selectedPrec, setSelectedPrec] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const temperatures = ["Celsius (°C)", "Fahrenheit (°F)"];
  const windspeeds = ["km/h", "mph"];
  const precipitations = ["Millimeters (mm)", "Inches (in)"];

  const handleSystemToggle = () => {
    const Metric = !isImperial;

    setIsImperial(Metric);

    if (Metric) {
      setSelectedTemp("Fahrenheit (°F)");
      setSelectedPrec("Inches (in)");
    } else {
      setSelectedTemp("Celsius (°C)");
      setSelectedPrec("Millimeters (mm)");
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-0 p-2 bg-red-400 cursor-pointer"
      >
        <img src={icon1} className="w-3 h-auto" />

        <span>{title}</span>

        <img src={icon2} className="w-3 h-auto" />
      </button>

      {isOpen && (
        // --- UNITS DROPDOWN ---
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-btncolor border border-border z-10">
          {type === "units-dropdown" && (
            <div>
              <div className="p-2 mb-2 ">
                <button
                  onClick={handleSystemToggle}
                  className="flex items-center justify-between w-full  text-sm text-left transition-colors p-2 rounded-lg cursor-pointer hover:bg-btnselected"
                >
                  {isImperial ? "Switch to Metric" : "Switch to Imperial"}
                </button>
              </div>

              {/* first section temperature 🌦️*/}
              <div>
                <p className="px-3 text-sm text-text-muted ">Temperature</p>

                {/* Mapping for temperature whaha 🌦️*/}
                <div className="px-2 ">
                  {temperatures.map((temperature, index) => {
                    const isSelected = selectedTemp === temperature;

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedTemp(temperature);
                          console.log("Selected Temp:", temperature);
                        }}
                        title={
                          "Select a temperature to filter your dashboard. Currently hovering " +
                          temperature
                        }
                        className={`flex items-center  justify-between w-full  text-sm text-left transition-colors p-2  rounded-lg cursor-pointer
            ${isSelected ? "bg-btnselected" : ""}
          `}
                      >
                        <span>{temperature}</span>

                        {isSelected && <img src={CheckIcon} alt="Check Icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <hr className="border border-border m-2" />

              {/* second section windspeed 💨*/}
              <div>
                <p className="px-3 text-sm text-text-muted ">Wind Speed</p>

                {/* Mapping for windspeed whaha 💨*/}
                <div className="px-2">
                  {windspeeds.map((windspeed, index) => {
                    const isSelected = selectedWindSpeed === windspeed;

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedWindSpeed(windspeed);
                          console.log("Selected Wind Speed:", windspeed);
                        }}
                        title={
                          "Select a temperature to filter your dashboard. Currently hovering " +
                          windspeed
                        }
                        className={`flex items-center  justify-between w-full  text-sm text-left transition-colors p-2 rounded-lg cursor-pointer
            ${isSelected ? "bg-btnselected" : ""}
          `}
                      >
                        <span>{windspeed}</span>

                        {isSelected && <img src={CheckIcon} alt="Check Icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <hr className="border border-border m-2" />
              {/* third section precipitation 💧*/}
              <div>
                <p className="px-3 text-sm text-text-muted ">Precipitation</p>

                {/* Mapping for precipitation whaha 💧*/}
                <div className="p-2">
                  {precipitations.map((precipitation, index) => {
                    const isSelected = selectedPrec === precipitation;

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedPrec(precipitation);
                          console.log("Selected Precipitation:", precipitation);
                        }}
                        title={
                          "Select a temperature to filter your dashboard. Currently hovering " +
                          precipitation
                        }
                        className={`flex items-center  justify-between w-full  text-sm text-left transition-colors p-2 rounded-lg cursor-pointer
            ${isSelected ? "bg-btnselected" : ""}
          `}
                      >
                        <span>{precipitation}</span>

                        {isSelected && <img src={CheckIcon} alt="Check Icon" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* --- DATES DROPDOWN --- */}
          {type === "date-dropdown" && (
            <div className="bg-red-400">
              <p className="">date Layout</p>
              {dates.map((date, index) => (
                <a key={index} href="#" className="text-sm font-semibold ">
                  {date}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
