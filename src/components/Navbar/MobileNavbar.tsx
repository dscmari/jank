import { useState } from "react";
import CircleX from "../../icons/CircleX";
import Phone from "../../icons/Phone";
import Mail from "../../icons/Mail";
import ArrowRight from "../../icons/ArrowRight";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="relative ">
        <div
          className={`h-screen left-full z-100 fixed w-full bg-white flex flex-col transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? "-translate-x-full" : ""}
                      `}
        >
          <div className="flex items-center justify-between p-4 dark:bg-white">
            <img
              src="/images/logo_transparent.png"
              alt="Jan Krösche Logo"
              style={{ width: "200px" }}
            />
            <CircleX onClick={() => setIsMenuOpen((prev) => !prev)} />
          </div>
          <div className="p-8">
            <ol className="flex flex-col gap-4 font-semibold text-lg">
              <li className="">Google Platz 1</li>
              <li className="">Chat GPT Platz 1</li>
              <li>Google Ads</li>
              <li>Referenzen </li>
              <li>For Free </li>
            </ol>
            <div className="pt-8 flex items-center gap-4 text-lg">
              <Phone color="black" className="size-5" />
              <span>+49 176 55 10 93 83</span>
            </div>
            <div className="pt-4 flex items-center gap-4 text-lg">
              <Mail color="" className="size-5" />
              <span>jan@jankroesche.de</span>
            </div>
            <button className="mt-12 px-4 py-4 bg-custom-red text-custom-white w-full flex items-center justify-between tracking-wider">
              <span>Zum Website-Check </span>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 dark:bg-white">
          <img
            src="/images/jank_logo.jpg"
            alt="Jan Krösche Logo"
            style={{ width: "200px" }}
          />
          <div className="flex items-center gap-4 z-10">
            <div
              className="burgermenu"
              id="burger-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
