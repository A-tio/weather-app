import { useState } from "react";

function Dropdown({ title, icon1, icon2, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // I added gap-2 here to put space between the icons and text
        className="inline-flex justify-center items-center gap-2 w-full rounded-md border p-2"
      >
        {/* Changed size to w-5 and added an alt attribute */}
        <img src={icon1} className="w-5 h-auto" />

        <span>{title}</span>

        <img src={icon2} className="w-5 h-auto" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-100 z-10">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
{
  /* // <div className="flex items-center bg-red-300 w-fit p-2 justify-between rounded-lg">
    //   <div>{icon1}</div>
    //   {name}
    //   <div>{icon2}</div>
    // </div> */
}
