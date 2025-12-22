import AddressBook from "../../icons/AddressBook";
import Airplane from "../../icons/Airplaine";
import ArrowRight from "../../icons/ArrowRight";
import Code from "../../icons/Code";
import Diamond from "../../icons/Diamond";
import Gear from "../../icons/Gear";
import Head from "../../icons/Head";
import Magnifier from "../../icons/Magnifier";
import Mail from "../../icons/Mail";
import Maps from "../../icons/Maps";
import Phone from "../../icons/Phone";
import Video from "../../icons/Video";
import ATF from "../ATF";
import Services from "../Pricing";
import Testimonials from "../Testimonials";
import WebsiteCheck from "../WebsiteCheck";
import LinkSeoCheck from "../LinkSeoCheck";
import LinkGeoCheck from "../LinkGeoCheck";

export default function DesktopContent() {
  return (
    <>
      {" "}
      <ATF />
      <section className="px-32 pb-48 pt-32">
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
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Schritt 1 (Besser sprechende Namen)
            </h3>
            <p className="text-base/8">
              Wir analysieren die Suchbegriffe, die genau Deine Kunden bei
              Google & ChatGPT eingeben
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Schritt 2 (Besser sprechende Namen)
            </h3>
            <p className="text-base/8">
              Wir optimieren Deine Website und setzen bei Bedarf Deine Google
              Werbeanzeigen auf
            </p>
          </div>
          <div className="flex flex-col flex-1">
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
        <div className="flex flex-col gap-4 items-center text-xl font-semibold bg-custom-red text-custom-white py-8 mt-16">
          <div>
            <p>Schnelle Kontaktaufnahme zu Jan Krösche</p>
          </div>
          <div className="flex gap-4 items-center">
            <Phone color="#f5f6fa" className="size-6" />
            <span>+49 0176 55109383</span>
          </div>
          <div className="flex gap-4 items-center">
            <Mail color1="rgb(231,0,53)" color2="#f5f6fa" className="size-6" />
            <a
              href="mailto:max.mustermann@ihre-domain.de"
              className="underline"
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
              style={{ width: "600px" }}
              alt="Portrait Jan Kroesche"
            />
            <p className="p-8 italic mx-auto text-lg">
              "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
            </p>
          </div>
        </div>
        <div className="2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="!text-2xl tracking-wide !mb-8">
            Wir bringen Dich bei Google & ChatGPT ganz nach vorne
          </h2>
          <p>
            {" "}
            Deine Website wird im Netz nicht gefunden? Dein größter Konkurrent
            erscheint immer vor Dir? Das ist natürlich ärgerlich, weil Dir
            dadurch natürlich viele Anfragen entgehen und die Neukunden bei
            Deiner Konkurrenz landen. Genau auf diese Problemstellung haben wir
            uns spezialisiert.
          </p>
          <div className="flex flex-col gap-4 list-disc pl-4 pt-8">
            <div className="flex items-center gap-4">
              <Magnifier className="size-14" />
              <p>
                {" "}
                Jan Krösche & Team sind Deine SEO, GEO und Ads Spezialisten,
                damit Du bei Google und ChatGPT die sichtbarste Firma Deiner
                Branche wirst. Und endlich mehr Neukunden-Anfragen über die
                Website erhälst
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
            <LinkSeoCheck />
            <ArrowRight />
          </button>
        </div>
      </section>
      <section className="my-32">
        <h2 className="text-center !text-2xl">Das machen wir alles für Dich</h2>
        <div className="flex gap-4 mt-12">
          <div className="flex-1 flex flex-col justify-between bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
            <div>
              <h2 className="text-center !mb-8">Google Platz 1</h2>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Magnifier />
                  <span>Google Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Maps />
                  <span>Maps Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Video />
                  <span>Youtube Kanal Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Magnifier />
                  <span>Bing Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Code />
                  <span>Krösche-Ranking-Tracker</span>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
              <LinkSeoCheck />
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
            <div>
              <h2 className="text-center !mb-8">Chat GPT Platz 1</h2>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Chat GPT Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Google KI-Modus Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Gemini Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Perplexity Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Copilot Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Head />
                  <span>Krösche-KI-Tracker</span>
                </div>
              </div>
            </div>

            <button className="px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
              <LinkGeoCheck />
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
            <div>
              <h2 className="text-center !mb-8">Bezahlte Werbeanzeigen</h2>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Google Werbung (Google Ads)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Bing Werbung (Bing Ads)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>KI Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>ChatGPT Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Copilot Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Perplexity Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>ChatGPT Shopping</span>
                </div>
              </div>
            </div>
            <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
              <span>Mehr zu Google Ads</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
      <Testimonials className="mt-24 bg-custom-white" />
      <Services />
      <section className="px-32 pt-32">
        <div className="">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold">
            Wir geben unsere <span className="text-custom-red">Expertise </span>
            weiter und schulen Firmen aus der ganzen DACH-Region.
            Suchmaschinenmarketing ist ein schnelllebiges Feld. Seit 2017 geben
            wir Firmen aus der gesamten DACH-Region Schulungen in den Bereichen{" "}
            <span className="text-red-500">SEO</span>,
            <span className="text-red-500"> Google Ads</span>,{" "}
            <span className="text-red-500"> Kundengewinnung im Internet</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-12">
          <div className="flex flex-col p-8 bg-custom-white rounded">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Workshop für die Bauer AG aus Schrobenhausen
            </h3>
            <p className="">
              Für das Marketing- und PR-Team der Bauer AG haben wir einen
              Workshop durchgeführt zum Thema Suchmaschinenoptimierung. Ziel des
              Workshops war es, das Wissen zu vermitteln, wie Inhalte auf der
              Website eingebunden werden können, um die Reichweite und die
              Rankings bei Google zu erhöhen
            </p>
          </div>
          <div className="flex flex-col p-8 bg-custom-white rounded">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Workshop für die Software-Firma rocom
            </h3>
            <p className="">
              Für die Software-Firma rocom haben wir einen SEO Workshop vor Ort
              gehalten. Ziel war es, den Mitarbeitenden einen Überblick zu den
              SEO Grundlagen zu vermitteln: Title Tags, Backlinks,
              Überschriftenstruktur etc..
            </p>
          </div>
          <div className="flex flex-col p-8 bg-custom-white rounded">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Workshop für das Hotel Bayerischer Hof in München
            </h3>
            <p className="">
              Für das renommierte Hotel Bayerischer Hof haben wir einen Workshop
              zum Thema Suchmaschinenmarketing durchgeführt. Dabei haben wir uns
              im Vorfeld die Website des Hotels angeschaut und konkrete
              Verbesserungen ausgearbeitet und im Workshop vorgeführt und
              erklärt.
            </p>
          </div>
          <div className="flex flex-col p-8 bg-custom-white rounded">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Workshop für den Hersteller BH Sens zur ChatGPT-Optimierung
            </h3>
            <p className="">
              Für die Hersteller Firma BH Sens haben wir einen KI SEO Workshop
              durchgeführt. Ziel war es, den Marketingverantwortlichen der Firma
              zu zeigen, wie man mit der Website bei ChatGPT besser gefunden
              werden kann und in den Antworten zitiert wird.
            </p>
          </div>
        </div>
        <div className="flex gap-8 text-custom-red p-2 mt-12">
          <div className="flex gap-2 items-center">
            <Phone color="rgb(231,0,53)" className="size-4" />
            <span className="text-xl font-semibold">+49 0176 55109383</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail color1="rgb(231,0,53)" color2="#f5f6fa" className="size-4" />
            <a
              href="mailto:max.mustermann@ihre-domain.de"
              className="text-xl font-semibold underline"
            >
              jan@jankroesche.de
            </a>
          </div>
        </div>
      </section>
      <section className="p-32 mt-32 bg-custom-white">
        <div className="ml-auto max-w-2/3 ">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold text-right">
            {" "}
            Endlich
            <span className="text-custom-red"> Platz 1 bei Google</span>: So
            läuft die Zusammenarbeit ab
          </p>
        </div>

        <div className="flex gap-12 pt-12">
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Kontaktaufnahme und Gespräch
            </h3>
            <p className="text-base/8">
              Du meldest Dich bei mir per Telefon unter 0176 55 10 93 83 oder
              per Mail unter jan@jankroesche.de – wir vereinbaren ein
              kostenloses Kennenlernen per Telefon, Teams oder vor Ort und
              besprechen Deine Ziele
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Start der Zusammenarbeit
            </h3>
            <p className="text-base/8">
              Wenn wir zusammenpassen und Du Dich für eine Zusammenarbeit mit
              uns entscheidest, starten wir zeitnah mit der Optimierung Deiner
              Website
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Fortlaufende Betreuung
            </h3>
            <p className="text-base/8">
              Wir stehen fortlaufend im Austausch. Ich analysiere den Status
              Quo, bereite neue Optimierungsvorschläge vor und bespreche alles
              mit Dir. Die Umsetzung erfolgt immer Step by Step, um stetig
              bessere Ergebnisse erzielen zu können
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-8 text-custom-red p-2 mt-12">
          <div className="flex gap-2 items-center">
            <Phone color="rgb(231,0,53)" className="size-4" />
            <span className="text-xl font-semibold">+49 0176 55109383</span>
          </div>
          <div className="flex gap-2 items-center">
            <Mail color1="rgb(231,0,53)" color2="#f5f6fa" className="size-4" />
            <a
              href="mailto:max.mustermann@ihre-domain.de"
              className="text-xl font-semibold underline"
            >
              jan@jankroesche.de
            </a>
          </div>
        </div>
      </section>
      <WebsiteCheck />
      <section className="px-32 mt-32">
        <h2 className="text-center !text-2xl !mb-12">
          Keine Lust mehr, hinter Deinem größten Wettbewerber hinterherzulaufen?
        </h2>
        <div className="flex gap-12 ">
          <div className="flex-1 flex flex-col gap-8 justify-between bg-custom-white leading-8 p-12 shadow-2xl rounded-lg dark">
            <h2 className="text-center">Wir helfen Dir und Deiner Firma</h2>
            <p className="leading-6">
              Das Spiel im Internet ist ganz einfach. Menschen suchen etwas bei
              Google oder ChatGPT und klicken auf die Websites, die ganz oben
              stehen. Die Firmen, die daher auf Platz 1 ranken, gewinnen die
              meisten Website-Besucher und ergattern sich die meisten Neukunden.
            </p>
            <div className="flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Für wichtige Keywords auf Platz 1 bei Google stehst</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>
                  Extrem häufig in den KI-Antworten von ChatGPT erscheinst
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Die Nr. 1 Deiner Branche wirst</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Mehr Anfragen übers Internet erhältst</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Langfristig am Markt bestehen kannst</span>
              </div>
              <div className="flex items-center gap-4 min-w-8">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Deine Website endlich „funktioniert“</span>
              </div>
            </div>
            <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
              <LinkSeoCheck />
              <ArrowRight />
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-8 justify-between bg-custom-white leading-8 p-12 shadow-2xl rounded-lg dark">
            <h2 className="text-center">Unsere Leistungen auf einen Blick</h2>
            <p className="leading-6">
              Unsere Aufgabe ist einfach: Wir optimieren Deinen Webauftritt,
              damit Du bei Google, ChatGPT, Perplexity und anderen KI-Maschinen
              bestens gefunden werden kannst. Wir kennen die Algorithmen und
              haben das „SEO Spiel“ seit 2017 schon Hundertfach durchgespielt.
            </p>
            <div className="flex flex-col gap-4 text-xl">
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Google Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>YouTube Kanal Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>ChatGPT Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Copilot Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Google Werbung schalten (Google Ads)</span>
              </div>
              <div className="flex items-center gap-4 min-w-8">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Bing Werbung schalten (Bing Ads)</span>
              </div>
            </div>
            <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
              <LinkSeoCheck />
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-16 m-32">
        <div className="flex-1 relative border-b-1 border-slate-200 dark:translate-y-8">
          <img
            src="/images/portraits/39321-4000_02.jpg"
            alt="Portrait Jan Krösche"
            className="h-96 object-cover"
          />
          <div className="p-4 bg-white absolute z-10 right-left bottom-0 flex flex-col items-center justify-center rounded-tr-xl h-1/2">
            <div>
              <img
                src="/images/jank_logo.jpg"
                alt="Jan Krösche Logo"
                style={{ width: "200px" }}
              />
            </div>
            <div className="flex flex-col pb-4 text-xl">
              <span className="block">Jan Krösche</span>
              <span className="block"></span>0176 55 10 9383
              <span className="block">jan@jankroesche.de</span>
            </div>
          </div>
          <div className="absolute bg-white w-full h-12 z-1 bottom-0"></div>
        </div>
        <div className="flex-1 bg-custom-white leading-8 p-8 rounded-lg dark">
          <div className="flex items-center justify-around max-w-screen">
            <img
              src="/images/website_boosting.jpg"
              alt="Website Boosting Logo"
              className="max-w-1/3"
            />
            <img src="/images/vdi.jpg" alt="VDI Logo" className="w-1/3" />
          </div>
          <p className="mt-8 text-center">
            Jan Krösche veröffentlicht regelmäßig im Fachmagazin „Website
            Boosting“ und hält Vorträge beim Verein Deutscher Ingenieure.
          </p>
        </div>
      </section>
    </>
  );
}
