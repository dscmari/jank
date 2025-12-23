import Mail from "../../../icons/Mail";
import Phone from "../../../icons/Phone";
import { Link } from "react-router-dom";
import { ShiftingDropDown } from "./ShiftingDropDown";
import Breadcrumbs from "../../Breadcrumps";
// import ChevronDown from "../../../icons/ChevronDown";

export default function DesktopNavbar() {
  return (
    <div className="bg-custom-white p-4 px-8">
      <div className="flex gap-8 justify-end items-center">
        <div className="flex gap-2 items-center">
          <Phone color="#2d3436" className="size-4" />
          <span>+49 0176 55109383</span>
        </div>
        <div className="flex gap-2 items-center">
          <Mail color="#2d3436" className="size-4" />
          <a href="mailto:max.mustermann@ihre-domain.de">jan@jankroesche.de</a>
        </div>
      </div>
      <div className="flex items-center justify-around pt-4">
        <Link to={"/"}>
          {" "}
          <img
            src="/images/logo_transparent.png"
            alt="Hintergrundbild Jan Krösche"
            style={{ width: "200px" }}
          />
        </Link>
        <ShiftingDropDown />
      </div>
      <Breadcrumbs />
    </div>
  );
}
