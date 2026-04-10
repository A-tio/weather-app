import { useState } from "react";

import IconSearch from "../assets/images/icon-search.svg";

export default function SearchBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const cities = ["City1", "City2", "City3"];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start gap-4 w-[90%] ">
      <div className="relative w-full sm:w-3/5 ">
        <div className="flex w-full flex-row justify-start bg-btncolor text-text-muted rounded-lg p-3 gap-2 ">
          <img src={IconSearch} className="w-4 h-auto" />{" "}
          <input
            placeholder="Search for a place..."
            className="focus:outline-none placeholder:text-text-muted text-white"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {isOpen && (
          <ul className="flex flex-col bg-btncolor border border-border mt-4 rounded-lg absolute margin-auto inset-x-0 z-10">
            {cities.map((city, key) => (
              <li
                className="hover:bg-hoverbtn rounded-lg cursor-pointer hover:border hover:border-border text-left p-2"
                key={key}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="flex w-full sm:w-1/5 justify-center bg-btnblue cursor-pointer px-5 py-3 rounded-lg cursor-pointer">
        Search
      </button>
    </div>
  );
}
