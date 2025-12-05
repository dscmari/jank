import AddressBook from "../icons/AddressBook";
import Airplane from "../icons/Airplaine";
import ArrowRight from "../icons/ArrowRight";
import Gear from "../icons/Gear";
import Magnifier from "../icons/Magnifier";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import Testimonials from "./Testimonials";

export default function DesktopContent() {
  return (
    <>
      {" "}
      <section className=" px-32 pb-48 pt-32">
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
            <Phone color="" className="size-8" />
            <span className="text-xl">+49 0176 55109383</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail color="custom-black" className="size-8" />
            <a
              href="mailto:max.mustermann@ihre-domain.de"
              className="text-xl underline"
            >
              jan@jankroesche.de
            </a>
          </div>
        </div>
      </section>
      <section className="bg-custom-white flex gap-12 p-32 py-24 2xl:gap-32 2xl:justify-center ">
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <div className="absolute -top-48">
            <img
              src="/images/portraits/39321-4133web.jpg"
              style={{width:"600px"}}
              alt="Portrait Jan Kroesche"
             
            />
            <p className="p-8 italic mx-auto text-lg">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer
              Branche werden"
            </p>
          </div>
        </div>
        <div className="2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="!text-2xl tracking-wide !mb-8">Wir bringen Dich bei Google & ChatGPT ganz nach vorne</h2>
          <p>
            {" "}
            Deine Website wird im Netz nicht gefunden? Dein größter Konkurrent
            erscheint immer vor Dir? Das ist natürlich ärgerlich, weil Dir
            dadurch natürlich viele Anfragen entgehen und die Neukunden bei
            Deiner Konkurrenz landen. Genau auf diese Problemstellung haben wir uns spezialisiert.
          </p>
          <div className="flex flex-col gap-4 list-disc pl-4 pt-8">
            <div className="flex items-center gap-4">
              <Magnifier className="size-14" />
              <p>
                {" "}
                Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, die
                Deinen Webauftritt so optimieren, damit Du bei Google, ChatGPT,
                Copilot und Perplexity auf Platz 1 rankst.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Airplane color="rgb(231,0,53)" className="size-8" />
              <p>
                Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei Google
                und ChatGPT katapultiert
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AddressBook color="rgb(231,0,53)" className="size-10" />
              <p>
                Selbständige (Makler, Ärzte, IT-Dienstleister, Therapeuten,
                Handwerker, Hoteliers, Steuerberater, Designer, etc.)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Gear color="rgb(231,0,53)" className="size-10" />
              <p>
                Technische Firmen (Maschinenbau, Software-Firmen, Hersteller,
                Ingenieure, Baufirmen, Kunststoffproduzenten, etc.)
              </p>
            </div>
          </div>
          <p className="pt-8">
            Wir arbeiten ohne Branchenfokus und sind in Deutschland, Österreich,
            Norditalien & der Schweiz für unsere Kunden unterwegs.
          </p>
          <button className="mt-16 p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
            <span>Zum Kostenlosen SEO-Check </span>
            <ArrowRight />
          </button>
        </div>
      </section>
      <section>
        <p>TODO: Unsere SEO und SEA Leistungen auf einen Blick, Hintergrund basic weiss</p>
      </section>
      <Testimonials />
    </>
  );
}
