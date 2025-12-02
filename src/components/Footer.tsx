export default function Footer() {
  return (
    <div className="mt-8 p-8 bg-custom-black text-white">
      <div className="flex flex-col items-center gap-4">
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
      <div className="flex flex-col mt-12">
        <span>Jan Krösche & Team</span>
        <span>0176 55 10 93 83</span>
        <span>jan@jankroesche.de </span>
        <span>Obere Mühlstraße 6</span>
        <span>86825 Bad Wörishofen</span>
      </div>
    </div>
  );
}
