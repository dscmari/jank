import { Link } from "react-router-dom";
import StaticForms from "./StaticForms";

type Props = {
  isGeo?: boolean;
  className?: string;
};

export default function WebsiteCheck({ isGeo, className }: Props) {
  return (
    <section
      className={`border-y-2 border-slate-200 bg-custom-red lg:bg-white text-custom-white lg:text-custom-black lg:border-none p-8 pt-12 lg:p-0 max-w-[1280px] 2xl:mx-auto ${className}`}
    >
      <div className="lg:flex lg:gap-16">
        <div className="hidden lg:block max-w-[640px] relative">
          <img
            src="/images/portraits/portrait_turned_side.jpg"
            alt=""
            className="w-full rounded-tr-4xl rounded-b-4xl"
          />
          <div className="absolute w-2/3 text-custom-white left-16 bottom-4 -translate-y-1/2 leading-8 font-semibold">
            <Link to={"/"}>
              {" "}
              <img
                src="/images/logo_white_bg_transparent.png"
                alt="Jan Krösche Logo"
                style={{ width: "100px" }}
                className=""
              />
            </Link>
            <p>
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi at quis fuga doloremque ex" Zitatende. Gänsehosen.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-col 2xl:justify-center lg:py-8 lg:max-w-1/2">
          <h2 className="!text-3xl/10">
            {isGeo ? "Kostenloser KI GEO Check" : "Kostenloser Website Check"}
          </h2>
          {isGeo ? (
            <p className="lg:font-semibold">
              Du willst bei ChatGPT, Gemini und Copilot in den Antworten
              erscheinen und mehr Anfragen generieren? Ich schaue mir Deine
              Website an und schicke Dir ein paar GEO Optimierungsvorschläge als
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
      </div>
    </section>
  );
}
