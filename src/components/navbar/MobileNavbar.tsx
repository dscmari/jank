import { useState } from "react";
import CircleX from "../../icons/CircleX";
import Phone from "../../icons/Phone";
import Mail from "../../icons/Mail";
import ArrowRight from "../../icons/ArrowRight";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import LinkSeoCheck from "../LinkSeoCheck";
import LinkGeoCheck from "../LinkGeoCheck";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <div className="relative ">
        <div
          className={`h-screen left-full z-100 fixed w-full bg-white flex flex-col transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? "-translate-x-full" : ""}
                      `}
        >
          <div
            className="flex items-center justify-between p-4 dark:bg-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Link to={"/"}>
              {" "}
              <img
                src="/images/logo_transparent.png"
                alt="Jan Krösche Logo"
                style={{ width: "200px" }}
                className="ml-4"
              />
            </Link>
            <CircleX />
          </div>
          <div className="p-8">
            <ol className="flex flex-col gap-4 font-semibold text-lg">
              <div className="relative">
                <div
                  className="flex gap-2 items-center"
                  onClick={() => setSelected((prev) => !prev)}
                >
                  <span>Leistungen</span>
                  <FiChevronDown
                    className={`transition-transform size-6 ${
                      selected ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {selected && (
                    <motion.ol
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="ml-4 bg-white !font-medium"
                    >
                       <div className="flex flex-col gap-2">
                         <h3 className="mt-4 font-semibold">Google Platz 1</h3>
                         <a href="#" className="mb-1 block text-neutral-400">
                           SEO Berater für Google Rankings
                         </a>
                         <a href="#" className="block text-neutral-400">
                           Google SEO Optimierung
                         </a>
                         <div className="text-neutral-400" onClick={() => setIsMenuOpen((prev) => !prev)}>
                           <LinkSeoCheck/>
                         </div>
                       </div>
                               <div className="flex flex-col gap-2">
                                 <h3 className="mt-4 font-semibold">ChatGPT Platz 1</h3>
                                 <a href="#" className="mb-1 block text-neutral-400">
                                   GEO-Berater für KI Sichtbarkeit
                                 </a>
                                 <a href="#" className="mb-1 block text-neutral-400">
                                   ChatGPT SEO
                                 </a>
                                 <a href="#" className="block text-neutral-400">
                                   KI Sichtbarkeit
                                 </a>
                                 <div className="text-neutral-400" onClick={() => setIsMenuOpen((prev) => !prev)}>
                                   <LinkGeoCheck/>
                                 </div>
                               </div>
                        <ol className="flex flex-col gap-2">
                        <h3 className="font-semibold mt-4">Google Werbung</h3>
                        <li>
                          {" "}
                          <a href="#" className="mb-1 block text-neutral-400">
                            SEO Berater für Google Rankings
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="#" className="block text-neutral-400">
                            Google SEO Optimierung
                          </a>
                        </li>
                        <li>
                          {" "}
                          <div className="text-neutral-400">
                            <LinkSeoCheck />
                          </div>
                        </li>
                      </ol>
                    </motion.ol>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to={"/Preise"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Preispakete
              </Link>
              <Link
                to={"/Referenzen"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Referenzen
              </Link>
              <Link
                to={"/Videos"}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Videos
              </Link>
              <Link to={"/KI-Tracker"}>KI-Tracker</Link>
            </ol>
            <div className="pt-8 flex items-center gap-4 text-lg">
              <Phone color="black" className="size-5" />
              <span>+49 176 55 10 93 83</span>
            </div>
            <div className="pt-4 flex items-center gap-4 text-lg">
              <Mail color="" className="size-5" />
              <span>jan@jankroesche.de</span>
            </div>
            <button className="mt-12 px-4 py-4 bg-custom-red text-custom-white w-full flex items-center justify-between tracking-wider rounded">
              <span>Zum Website-Check </span>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 dark:bg-white">
          <Link to={"/"}>
            <img
              src="/images/logo_transparent.png"
              alt="Jan Krösche Logo"
              style={{ width: "200px" }}
              className="ml-4"
            />
          </Link>
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
