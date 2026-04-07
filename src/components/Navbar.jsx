import Logo from "../assets/images/logo.svg";
import Dropdown from "./Dropdown";
import IconDown from "../assets/images/icon-dropdown.svg";
import IconUnits from "../assets/images/icon-units.svg";

export default function Navbar() {
  const Unit = ["Celsius", "Fahrenheit", "km/h", "mph"];

  return (
    <div className="bg-red-400 flex justify-between py-4 items-center">
      <img src={Logo} alt="Logo of Weather Now" className="w-64 h-auto " />
      <Dropdown
        icon1={IconUnits}
        title="testingww"
        icon2={IconDown}
        items={Unit}
      />
    </div>
  );
}
