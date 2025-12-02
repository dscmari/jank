import checkIsMobile from "./utils/checkIsMobile";
import checkIsTablet from "./utils/checkIsTablet";
import Navbar from "./components/Navbar";
import ATF from "./components/ATF";
import ArrowRight from "./icons/ArrowRight";
import Phone from "./icons/Phone";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Maps from "./icons/Maps";
import Video from "./icons/Video";
import Magnifier from "./icons/Magnifier";
import Code from "./icons/Code";
import Head from "./icons/Head";
import Diamond from "./icons/Diamond";
import WebsiteCheck from "./components/WebsiteCheck";

function App() {
  const isMobile = checkIsMobile();
  const isTablet = checkIsTablet();

  return (
    <>
      <Navbar isMobile={isMobile} isTablet={isTablet} />
      <ATF isMobile={isMobile} isTablet={isTablet} />

      {isMobile && (
        <div>
          {" "}
          <section className="bg-custom-white mx-8 mt-8 leading-8 p-8 shadow-2xl rounded-lg dark">
            <h2>
              Seit 2017 haben wir über{" "}
              <span className="underline">500 Firmen-Websites</span> auf Platz 1
              bei Google katapultiert.
            </h2>
            <p className="text-base/8 py-4">
              Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, damit Du
              die Nr. 1 im Netz wirst. Und mehr Neukunden gewinnst als Deine
              Wettbewerber.
            </p>
            <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
              <span>Kostenlose SEO-Check </span>
              <ArrowRight />
            </button>
          </section>
          <section className="mt-24">
            <img
              src="/images/portraits/39321-3981.jpg"
              alt="Portrait Jan Krösche"
            />
            <p className="mx-8 mt-2 text-sm text-thin text-center dark:pb-4">
              Jan Krösche hat bis 2025 eine der größten
              Onlinemarketing-Agenturen in Deutschland aufgebaut und geleitet.
              Seit 2025 arbeitet er mit einem spezialisierten Team selbständig.
            </p>
          </section>
          <section className="mt-24">
            <h2 className="mx-8 dark:pt-8">
              In 3 Schritten bringen wir Dich auf Platz 1
            </h2>
            <div className="bg-custom-white mx-8 p-8 mt-8 shadow-2xl rounded-lg flex flex-col gap-4 dark">
              <div>
                <h2>Schritt 1</h2>
                <p>
                  Wir analysieren die Suchbegriffe, die genau Deine Kunden bei
                  Google & ChatGPT eingeben
                </p>
              </div>
              <div>
                <h2>Schritt 2</h2>
                <p>
                  Wir optimieren Deine Website und/oder setzen Deine Google
                  Werbeanzeigen auf
                </p>
              </div>
              <div>
                <h2>Schritt 3</h2>
                <p>
                  Wir bleiben am Ball und verbessern deine Website und Deine
                  Anzeige laufend, damit du sichtbarer wirst und an deinen
                  Wettbewerbern vorbeiziehst. Und immer mehr Kunden gewinnst
                </p>
              </div>

              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Phone />
                  <span>Jan Krösche anrufen</span>
                </div>
                <ArrowRight />
              </button>
            </div>
          </section>
          <Contact className="mt-24" />
          <section className="mt-24 flex flex-col gap-12 bg-custom-white p-8 dark">
            <h2>Wir haben über 500 Firmenwebsites auf Platz 1 optimiert</h2>
            <div>
              <h2>Schwabinger Wahrheit Hotel in München</h2>
              <p>
                Für das Hotel „Schwabinger Wahrheit“ führen wir seit mehreren
                Jahren Website-Optimierungen (SEO) durch, um die Präsenz auf
                Google zu steigern und mehr Hotelgäste zu gewinnen.
              </p>
              <div className="mt-4">
                <p>
                  <span className="italic">Familienhotel Schwabing</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">Hotel mit Spa Schwabing</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">Wochenendhotel Schwabing</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
              </div>
              <p className="mt-4">
                „Wir haben mit Jan Krösche einen idealen Partner im SEO gefunden.
                Er gibt uns immer neue Vorschläge, wie wir unsere Website
                verbessern können, um bei Google zu immer mehr Schlagworten
                sichtbar zu sein.“
              </p>
              <span className="font-semibold pt-2 block">Hotelleiter Christoph Grödl</span>
            </div>

            <div>
              <h2>IT Dienstleister Kramer Systems GmbH aus Landsberg</h2>
              <p>
                Für den IT-Dienstleister Kramer Systems ist es wichtig, in der
                Region gut auffindbar zu sein, um neue Firmen als Kunden zu
                gewinnen. Wir optimieren die Website daher für die ganze Region.
              </p>
              <div className="mt-4">
                <p>
                  <span className="italic">IT Dienstleister Landsberg</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">
                    Telefonanlage Einrichtung Landsberg
                  </span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">IT Dienstleister Kaufbeuren</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
              </div>
              <p className="mt-4">
                „Wir arbeiten mit Herrn Krösche schon seit 2018 zusammen.
                Seitdem sind wir in der Region der meistgefundene
                IT-Dienstleister in der ganzen Region. Die Website ist für
                unsere Neukundengeschäft nicht mehr wegzudenken.“
              </p>
              <span className="font-semibold pt-2 block">Inhaber Günter Kramer</span>
            </div>
            <div>
              <h2>Kunststoff-Firma Gregor Hofbauer GmbH aus Türkheim</h2>
              <p>
                Die Gregor Hofbauer GmbH ist Kunststoffproduzent aus Bayern.
                Ziel der Website und der Google-Optimierung ist die Steigerung
                der Anfragen von Geschäftskunden.
              </p>
              <div className="mt-4">
                <p>
                  <span className="italic">Kunststoffkoffer Hersteller</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">Schutzkoffer Hersteller</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
                <p>
                  <span className="italic">Transportkoffer Produzent</span>
                  <span className="text-sm">: Platz 1 bei Google</span>
                </p>
              </div>
              <p className="mt-4">
                „Herr Krösche gibt uns jeden Monat neue SEO-Vorschläge und zeigt
                uns, welche Keywords von unseren Kunden gesucht werden. Genau
                darauf konzentrieren wir uns dann, um den Markt zu treffen und
                die richtigen Anfragen über die Seite zu bekommen.“
              </p>
              <span className="font-semibold pt-2 block">
                Vertriebsleiter Helmut Schmalix
              </span>
            </div>
          </section>
          <section className="px-8 dark:p-8 mt-24 flex flex-col gap-4">
            <h2 className="!mb-0">
              Wir bringen Dich bei Google & ChatGPT ganz nach vorne
            </h2>
            <ul className="list-disc px-4 flex flex-col gap-2">
              <li>
                {" "}
                Deine Website wird im Netz nicht gefunden? Dein größter
                Konkurrent erscheint immer vor Dir? Das ist natürlich ärgerlich,
                weil Dir dadurch natürlich viele Anfragen entgehen und die
                Neukunden bei Deiner Konkurrenz landen.
              </li>
              <li>
                Genau auf diese Problemstellung haben wir uns spezialisiert. Wir
                helfen Unternehmen dabei, damit sie die Nummer 1 ihrer Branche
                werden.
              </li>
              <li>
                Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, die
                Deinen Webauftritt so optimieren, damit Du bei Google, ChatGPT,
                Copilot und Perplexity auf Platz 1 rankst.
              </li>
              <li>
                {" "}
                Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei Google
                und ChatGPT katapultiert
              </li>
              <li>
                {" "}
                Selbständige (Makler, Ärzte, IT-Dienstleister, Therapeuten,
                Handwerker, Hoteliers, Steuerberater, Designer, etc.)
              </li>
              <li>
                {" "}
                Technische Firmen (Maschinenbau, Software-Firmen, Hersteller,
                Ingenieure, Baufirmen, Kunststoffproduzenten, etc.)
              </li>
              <li>
                {" "}
                Wir arbeiten ohne Branchenfokus und sind in Deutschland,
                Österreich, Norditalien & der Schweiz für unsere Kunden
                unterwegs.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="mx-8 !mb-12 mt-24 dark:pt-8">
              Unsere SEO und SEA Leistungen auf einen Blick
            </h2>
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
              <h2 className="text-center !mb-8">Google Platz 1</h2>
              <div className="flex flex-col gap-4 pl-4 text-xl">
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
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Kostenloser SEO Check </span>
                <ArrowRight />
              </button>
            </div>
          </section>
          <section className="mt-24">
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
              <h2 className="text-center !mb-8">Chat GPT Platz 1</h2>
              <div className="flex flex-col gap-4 pl-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Chat GPT Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Google KI-Modus Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Gemini Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Perplexity Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Copilot Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Head />
                  <span>Krösche-KI-Tracker</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Mehr zu Google Ads</span>
                <ArrowRight />
              </button>
            </div>
          </section>
                    <section className="mt-24">
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
              <h2 className="text-center !mb-8">Bezahlte Werbeanzeigen</h2>
              <div className="flex flex-col gap-4 pl-4 text-x">
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Google Werbung (Google Ads)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Bing Werbung (Bing Ads)</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>KI Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>ChatGPT Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Copilot Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Perplexity Ads</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>ChatGPT Shopping</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Kostenlose SEO Tipps</span>
                <ArrowRight />
              </button>
            </div>
          </section>
          <section className="mt-24 bg-custom-white p-8 dark">
            <h2>
              Wir geben unsere Expertise weiter und schulen Firmen aus der
              ganzen DACH-Region
            </h2>
            <p>
              Suchmaschinenmarketing ist ein schnelllebiges Feld. Wer nicht am
              Ball bleibt, verliert schnell den Anschluss. Seit 2017 geben wir
              Firmen aus der gesamten DACH-Region Schulungen in den Bereichen
              SEO, Google Ads, Kundengewinnung im Internet, etc. Hier ein Auszug
              unserer durchgeführten Workshops
            </p>
            <div className="flex flex-col gap-12 mt-12">
              <div>
                <h2>Workshop für die Bauer AG aus Schrobenhausen</h2>
                <p>
                  Für das Marketing- und PR-Team der Bauer AG haben wir einen
                  Workshop durchgeführt zum Thema Suchmaschinenoptimierung. Ziel
                  des Workshops war es, das Wissen zu vermitteln, wie Inhalte
                  auf der Website eingebunden werden können, um die Reichweite
                  und die Rankings bei Google zu erhöhen.
                </p>
              </div>
              <div>
                <h2>Workshop für die Software-Firma rocom</h2>
                <p>
                  Für die Software-Firma rocom haben wir einen SEO-Workshop vor
                  Ort gehalten. Ziel war es, den Mitarbeitenden einen Überblick
                  zu den SEO-Grundlagen zu vermitteln: Title Tags, Backlinks,
                  Überschriftenstruktur etc..
                </p>
              </div>
              <div>
                <h2>Workshop für das Hotel Bayerischer Hof in München</h2>
                <p>
                  Für das renommierte Hotel Bayerischer Hof haben wir einen
                  Workshop zum Thema Suchmaschinenmarketing durchgeführt. Dabei
                  haben wir uns im Vorfeld die Website des Hotels angeschaut und
                  konkrete Verbesserungen ausgearbeitet und im Workshop
                  vorgeführt und erklärt.
                </p>
              </div>
              <div>
                <h2>
                  Workshop für den Hersteller BH Sens zur ChatGPT-Optimierung
                </h2>
                <p>
                  Für die Hersteller Firma BH Sens haben wir einen
                  KI-SEO-Workshop durchgeführt. Ziel war es, den
                  Marketingverantwortlichen der Firma zu zeigen, wie man mit der
                  Website bei ChatGPT besser gefunden werden kann und in den
                  Antworten zitiert wird.
                </p>
              </div>
            </div>
          </section>
          <section className="p-8 mt-24 flex flex-col gap-8">
            <h2 className="">
              Endlich Platz 1 bei Google: So läuft die Zusammenarbeit ab
            </h2>
            <div>
              <h2>1. Kontaktaufnahme und Gespräch</h2>
              <p>
                Du meldest Dich bei mir per Telefon unter 0176 55 10 93 83 oder
                per Mail unter jan@jankroesche.de – wir vereinbaren ein
                kostenloses Kennenlernen per Telefon, Teams oder vor Ort und
                besprechen Deine Ziele.
              </p>
            </div>
            <div>
              <h2>2. Start der Zusammenarbeit</h2>
              <p>
                Wenn wir zusammenpassen und Du Dich für eine Zusammenarbeit mit
                uns entscheidest, starten wir zeitnah mit der Optimierung Deiner
                Website.
              </p>
            </div>
            <div>
              <h2>3. Fortlaufende Betreuung</h2>
              <p>
                Wir stehen fortlaufend im Austausch. Ich analysiere den Status
                Quo, bereite neue Optimierungsvorschläge vor und bespreche alles
                mit Dir. Die Umsetzung erfolgt immer Step by Step, um stetig
                bessere Ergebnisse erzielen zu können.
              </p>
            </div>
          </section>
          <WebsiteCheck />
          <section className="mt-24 dark:pt-8">
            <h2 className="mx-8">
              Keine Lust mehr, hinter Deinem größten Wettbewerber
              hinterherzulaufen?
            </h2>
            <p className="m-8">
              Das Spiel im Internet ist ganz einfach. Menschen suchen etwas bei
              Google oder ChatGPT und klicken auf die Websites, die ganz oben
              stehen. Die Firmen, die daher auf Platz 1 ranken, gewinnen die
              meisten Website-Besucher und ergattern sich die meisten Neukunden.
            </p>
            <div className="mt-12 bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
              <h2 className="text-center !mb-8">
                Wir helfen Dir und Deiner Firma, damit Du
              </h2>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>
                    Für wichtige Keywords auf Platz 1 bei Google stehst
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>
                    Extrem häufig in den KI-Antworten von ChatGPT erscheinst
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Die Nr. 1 Deiner Branche wirst</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Mehr Anfragen übers Internet erhältst</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Langfristig am Markt bestehen kannst</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Deine Website endlich „funktioniert“</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Kostenloser SEO Check</span>
                <ArrowRight />
              </button>
            </div>
            <p className="mt-24 mx-8">
              Unsere Aufgabe ist einfach: Wir optimieren Deinen Webauftritt,
              damit Du bei Google, ChatGPT, Perplexity und anderen KI-Maschinen
              bestens gefunden werden kannst. Wir kennen die Algorithmen und
              haben das „SEO-Spiel“ seit 2017 schon Hundertfach durchgespielt.{" "}
            </p>
            <div className="mt-12 bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg dark">
              <h2 className="text-center !mb-8">
                Unsere Leistungen auf einen Blick
              </h2>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Google Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>YouTube Kanal Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>ChatGPT Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Copilot Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Google Werbung schalten (Google Ads)</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-6 flex-shrink-0" />
                  <span>Bing Werbung schalten (Bing Ads)</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Kostenloser SEO Check</span>
                <ArrowRight />
              </button>
            </div>
          </section>
          <section className="bg-custom-white mx-8 mt-24 leading-8 p-8 shadow-2xl rounded-lg dark">
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
            <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Phone />
                <span>Jan Krösche anrufen</span>
              </div>
              <ArrowRight />
            </button>
          </section>
          <section className="mt-24 relative border-b-1 border-slate-200 dark:translate-y-8">
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
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
