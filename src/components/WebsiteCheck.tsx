import StaticForms from "./StaticForms";

type Props = {
  isGeo?: boolean;
};

export default function WebsiteCheck({ isGeo }: Props) {
  return (
    <section className="p-8 lg:p-0 mt-24 lg:mt-32 bg-custom-red lg:bg-white text-custom-white max-w-[1400px] 2xl:mx-auto">
      <div className="lg:flex">
        <div className="flex-1 lg:flex lg:flex-col 2xl:justify-center lg:px-16 lg:py-8  lg:bg-custom-red lg:max-w-1/2">
          <h2 className="!text-3xl/10">
            {isGeo
              ? "Kostenloser GEO-Check (KI-SEO)"
              : "Kostenloser Website Check"}
          </h2>
          {isGeo ? (
            <p className="lg:font-semibold">
              Du willst bei ChatGPT, Gemini und Copilot in den Antworten
              erscheinen und mehr Anfragen generieren? Ich schaue mir Deine
              Website an und schicke Dir ein paar GEO-Optimierungsvorschläge als
              Datei per Mail zu. Komplett kostenlos.
            </p>
          ) : (
            <p className="lg:font-semibold">
              Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr
              Anfragen generieren? Ich schaue mir Deine Website an und schicke
              Dir ein paar Optimierungsvorschläge als Datei per Mail zu.
              Komplett kostenlos.
            </p>
          )}
          <StaticForms />
        </div>
        <div className="hidden lg:block flex-1">
          <img
            src="/images/portraits/square_portrait.jpeg"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
