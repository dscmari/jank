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
import Magnifier from "../../icons/Magnifier";
import Code from "../../icons/Code";
import ArrowTrendingUp from "../../icons/ArrowTrendingUp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <div className="relative ">
        <div
          className={`min-h-screen max-h-full overflow-y-auto left-full z-100 fixed top-0 w-full bg-white flex flex-col transition-transform duration-300 ease-in-out 
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
          <div className="">
            <ol>
              <div
                className={`pt-4 rounded-t flex items-center justify-between ${
                  isSelected
                    ? "border-t border-slate-200 px-8"
                    : "mx-8 border-b-2 border-slate-200"
                }`}
                onClick={() => setIsSelected((prev) => !prev)}
              >
                <span className="font-semibold text-lg pb-2">Leistungen</span>
                <FiChevronDown
                  className={`transition-transform size-6 ${
                    isSelected ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className="flex flex-col font-semibold text-lg">
                <AnimatePresence>
                  {isSelected && (
                    <motion.ol
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`pl-8 pb-8 flex flex-col gap-4 !font-medium ${
                        isSelected ? "border-b-2 border-slate-200" : ""
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-4 items-center mt-4">
                             <Magnifier className="size-6" />
                          <h3 className="font-semibold">Google Platz 1</h3>
                       
                        </div>

                        <a href="#" className="block text-neutral-400">
                          SEO Berater für Google Rankings
                        </a>
                        <a href="#" className="block text-neutral-400">
                          Google SEO Optimierung
                        </a>
                        <div
                          className="text-neutral-400"
                          onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                          <LinkSeoCheck />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-4 items-center mt-4">
                          {" "}
                              <Code className="size-6"/>
                          <h3 className="font-semibold">ChatGPT Platz 1</h3>
                      
                        </div>

                        <a href="#" className="block text-neutral-400">
                          GEO-Berater für KI Sichtbarkeit
                        </a>
                        <a href="#" className="block text-neutral-400">
                          ChatGPT SEO
                        </a>
                        <a href="#" className="block text-neutral-400">
                          KI Sichtbarkeit
                        </a>
                        <div
                          className="text-neutral-400"
                          onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                          <LinkGeoCheck />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                           <div className="flex gap-4 items-center mt-4">
                          {" "}
                                 <ArrowTrendingUp className="size-6"/>
                          <h3 className="font-semibold">Google Werbung</h3>
                   
                        </div>
                        <a href="#" className="block text-neutral-400">
                          Google Ads Berater für Google-Klicks
                        </a>
                        <a href="#" className="block text-neutral-400">
                          Kostenloser Google-Ads-Kurs
                        </a>
                      </div>
                    </motion.ol>
                  )}
                </AnimatePresence>

                <Link
                  to={"/Preise"}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="pt-6 pb-2 mx-8 border-b-2 border-slate-200"
                >
                  Preispakete
                </Link>
                <Link
                  to={"/Referenzen"}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
                >
                  Referenzen
                </Link>
                <Link
                  to={"/Videos"}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
                >
                  Videos
                </Link>
                <Link
                  to={"/KI-Tracker"}
                  className="pt-4 pb-2 mx-8 border-b-2 border-slate-200"
                >
                  KI-Tracker
                </Link>
              </div>
            </ol>
            <div className="pt-8 pl-8 flex items-center gap-4 text-lg">
              <Phone color="black" className="size-5" />
              <span>+49 176 55 10 93 83</span>
            </div>
            <div className="mt-4 pl-8 flex items-center gap-4 text-lg">
              <Mail color="" className="size-5" />
              <span>jan@jankroesche.de</span>
            </div>
            <div className="mx-8 my-12">
              <button
                className="px-4 py-4 bg-custom-red text-custom-white w-full flex items-center justify-between tracking-wider rounded"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <LinkSeoCheck />
                <ArrowRight />
              </button>
            </div>
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
