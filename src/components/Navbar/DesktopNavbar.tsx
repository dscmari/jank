import Mail from "../../icons/Mail";
import Phone from "../../icons/Phone";

export default function DesktopNavbar() {
  return (
    <div className="bg-custom-white p-4 px-8">
      <div className="flex items-center justify-between">
        <img
          src="/images/logo_transparent.png"
          alt="Hintergrundbild Jan Krösche"
          style={{ width: "200px" }}
        />
        <ol className="flex gap-12 text-lg">
          <li>Google Platz 1</li>
          <li>Chapt GPT Platz 1</li>
          <li>Google Ads</li>
          <li>Referenzen</li>
          <li>For Free</li>
        </ol>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Phone color="custom-black" className="size-6" />
              <span>+49 0176 55109383</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail color="custom-black" className="size-6" />
              <a href="mailto:max.mustermann@ihre-domain.de">
                jan@jankroesche.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
