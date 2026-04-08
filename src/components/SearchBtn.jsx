import { useState } from "react";

import IconSearch from "../assets/images/icon-search.svg";

export default function SearchBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-[90%] bg-red-300">
      <div>
        <div className="flex sm:w-120 flex-row justify-start bg-btncolor text-text-muted rounded-lg p-3 gap-2 ">
          <img src={IconSearch} className="w-4 h-auto" />{" "}
          <input
            placeholder="Search for a place..."
            className="focus:outline-none placeholder:text-text-muted text-white"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="flex bg-btncolor border border-border">
              hdwjkdhakjdwkjajdhaj
            </div>
          )}
        </div>
      </div>

      <button className="flex sm:w-24 w-full justify-center bg-btnblue cursor-pointer px-5 py-3 rounded-lg cursor-pointer">
        Search
      </button>
    </div>
  );
}
