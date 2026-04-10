import Logo from "../assets/images/logo.svg";
import Dropdown from "./Dropdown";
import IconDown from "../assets/images/icon-dropdown.svg";
import IconUnits from "../assets/images/icon-units.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between py-8  items-center">
      <img
        src={Logo}
        alt="Logo of Weather Now"
        className="w-40 xs:w-56  h-auto "
      />
      <Dropdown
        icon1={IconUnits}
        title="Units"
        icon2={IconDown}
        type="units-dropdown"
      />
    </div>
  );
}
