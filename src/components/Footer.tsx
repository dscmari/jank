import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-8 p-8 bg-custom-black text-white lg:flex lg: flex-row-reverse lg:justify-around">
      <div className="flex flex-col items-center gap-4">
        <Link to={"/Datenschutz"} className="underline">
          Datenschutzerklärung
        </Link>
        <a href="#" className="underline">
          Allgemeine Geschäftsbedingungen
        </a>
        <Link to={"/Impressum"} className="underline">
          Impressum
        </Link>
      </div>
      <div className="flex flex-col mt-12 lg:mt-0">
        <span>Jan Krösche & Team</span>
        <span>0176 55 10 93 83</span>
        <span>jan@jankroesche.de</span>
        <span>Obere Mühlstraße 6</span>
        <span>86825 Bad Wörishofen</span>
      </div>
    </div>
  );
}
