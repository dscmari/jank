
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";

export default function DesktopContent() {
  return (
    <>
      {" "}
      <div className="bg-custom-white px-32 py-24">
        <div className="max-w-2/3 ">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold">
            {" "}
            Jan Krösche hat bis 2025 eine der{" "}
            <span className="text-custom-red">
              größten Onlinemarketing-Agenturen{" "}
            </span>
            in Deutschland aufgebaut und geleitet. Seit 2025 arbeitet er mit
            einem spezialisierten Team selbständig
          </p>
          <p className="text-3xl/10 tracking-wide font-semibold">
            In 3 Schritten bringen wir Dich auf Platz 1
          </p>
        </div>

        <div className="flex gap-12 pt-12">
          <div className="flex flex-col max-w-1/4">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Schritt 1 (Besser sprechende Namen)
            </h3>
            <p className="text-base/8">
              Wir analysieren die Suchbegriffe, die genau Deine Kunden bei
              Google & ChatGPT eingeben
            </p>
          </div>
          <div className="flex flex-col max-w-1/4">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Schritt 2 (Besser sprechende Namen)
            </h3>
            <p className="text-base/8">
              Wir optimieren Deine Website und setzen bei Bedarf Deine Google
              Werbeanzeigen auf
            </p>
          </div>
          <div className="flex flex-col max-w-1/4">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Schritt 3 (Besser sprechende Namen)
            </h3>
            <p className="text-base/8">
              Wir bleiben am Ball und verbessern deine Website und Deine Anzeige
              laufend, damit du sichtbarer wirst und an deinen Wettbewerbern
              vorbeiziehst. Und immer mehr Kunden gewinnst
            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-12">
          <div className="flex gap-2 items-center">
            <Phone color="custom-black" className="size-8" />
            <span className="text-xl">+49 0176 55109383</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail color="custom-black" className="size-8" />
            <a href="mailto:max.mustermann@ihre-domain.de" className="text-xl">
              jan@jankroesche.de
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
