import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import StaticForms from "./StaticForms";

export default function WebsiteCheck() {
  return (
    <section className="p-8 lg:p-32 mt-24 lg:mt-0 bg-custom-red lg:bg-white text-custom-white lg:text-custom-black">
      <div className="hidden lg:block">
        <p className="text-3xl/10 font-semibold mb-12">
          <span className="text-custom-red">Kostenloser Website Check: </span>{" "}
          Du willst bei Google & ChatGPT auf Platz 1 kommen und{" "}
          <span className="text-custom-red"> mehr Anfragen </span>generieren?
          Ich schaue mir Deine Website an und schicke Dir ein paar als Datei per
          Mail zu. Komplett kostenlos.
        </p>
      </div>
      <div className="lg:flex lg:items-center lg:gap-24 lg:py-8">

        <div className="hidden lg:flex lg:flex-col gap-4">
          <div>
            <img
              src="/images/portraits/39321-3981.jpg"
              alt="Portait von Jan Krösche"
              style={{ width: "400px", height: "auto" }}
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Jan Krösche</span>

            <div className="flex gap-2 items-center">
              <Phone color="#2d3436" className="size-4" />
              <span>+49 0176 55109383</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail color="#2d3436" className="size-4" />
              <a href="mailto:max.mustermann@ihre-domain.de">
                jan@jankroesche.de
              </a>
            </div>
          </div>
        </div>
                <div className="lg:max-w-2xl">
          <h1 className="lg:hidden !mb-8">Kostenloser Website Check</h1>
          <p className="lg:hidden">
            Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr Anfragen
            generieren? Ich schaue mir Deine Website an und schicke Dir ein paar
            Optimierungsvorschläge als Datei per Mail zu. Komplett kostenlos.
          </p>
          <p className="hidden lg:block">
            Trage ganz unverbindlich die Adresse deiner Website und deine
            Mailadresse ein
          </p>
          <StaticForms />
        </div>
      </div>
    </section>
  );
}
