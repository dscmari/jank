import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-8 p-8 bg-custom-black text-white lg:flex lg: flex-row-reverse lg:justify-around">
      <div className="flex flex-col items-center gap-4">
        <Link to={"/Blog"} className="underline">Blog</Link>
        <a href="#" className="underline">
          Datenschutz
        </a>
        <a href="#" className="underline">
          Allgemeine Geschäftsbedingungen
        </a>
        <a href="#" className="underline">
          Impressum
        </a>
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
