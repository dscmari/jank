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
          <section className="bg-custom-white mx-8 -translate-y-40 leading-8 p-8 shadow-2xl rounded-lg">
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
              <span>Kostenlose SEO Tipps </span>
              <ArrowRight />
            </button>
          </section>
          <section className="-translate-y-12">
            <img
              src="/images/portraits/39321-3981.jpg"
              alt="Portrait Jan Krösche"
            />
            <p className="mx-8 mt-2 text-sm text-thin text-center">
              Jan Krösche hat bis 2025 eine der größten
              Onlinemarketing-Agenturen in Deutschland aufgebaut und geleitet.
              Seit 2025 arbeitet er mit einem spezialisierten Team selbständig.
            </p>
            <p className="py-4 mx-8">
              Unsere Referenzen sprechen für sich.{" "}
              <span className="underline">Mach Dir selbst ein Bild.</span>{" "}
            </p>
          </section>
          <section className="bg-custom-white mx-8 mt-16 leading-8 p-8 shadow-2xl rounded-lg">
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
          <section className="mt-8 p-8 mt-24 flex flex-col gap-4">
            <h2 className="!mb-0">
              Wir bringen Dich bei Google & ChatGPT ganz nach vorne
            </h2>
            <p>
              Deine Website wird im Netz nicht gefunden? Dein größter Konkurrent
              erscheint immer vor Dir? Das ist natürlich ärgerlich, weil Dir
              dadurch natürlich viele Anfragen entgehen und die Neukunden bei
              Deiner Konkurrenz landen.{" "}
            </p>
            <p>
              {" "}
              Genau auf diese Problemstellung haben wir uns spezialisiert. Wir
              helfen Unternehmen dabei, damit sie die Nummer 1 ihrer Branche
              werden.{" "}
            </p>
            <p>
              Seit 2017 haben wir schon über 500 Firmen auf Platz 1 bei Google
              und ChatGPT katapultiert. Unsere Kunden sind:
            </p>
            <ol>
              <li>
                Selbständige (Makler, Ärzte, IT-Dienstleister, Therapeuten,
                Handwerker, Hoteliers, Steuerberater, Designer, etc.)
              </li>
              <li>
                Technische Firmen (Maschinenbau, Software-Firmen, Hersteller,
                Ingenieure, Baufirmen, Kunststoffproduzenten, etc.)
              </li>
            </ol>
            <p>
              Wir arbeiten ohne Branchenfokus und sind in Deutschland,
              Österreich, Norditalien & der Schweiz für unsere Kunden unterwegs.
            </p>
          </section>
          <Contact className="mt-24" />
          <section>
            <h2 className="mx-8 !mb-12 mt-24">
              Unsere SEO und SEA Leistungen auf einen Blick
            </h2>
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg ">
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
                  <span>SEO Automation Beratung</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
                <span>Kostenloser SEO Check </span>
                <ArrowRight />
              </button>
            </div>
          </section>
          <section className="mt-24">
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg ">
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
                  <span>Gimini Optimierung</span>
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
                <span>Kostenloser KI SEO Check</span>
                <ArrowRight />
              </button>
            </div>
          </section>
          <section className="mt-24">
            <div className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg ">
              <h2 className="text-center !mb-8">Bezahlte Werbeanzeigen</h2>
              <div className="flex flex-col gap-4 pl-4 text-xl">
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
         <WebsiteCheck/>
          <section className="my-24">
            <p className="mx-8 text-center">
              Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, die Deinen
              Webauftritt so optimieren, damit Du bei Google, ChatGPT, Copilot
              und Perplexity auf Platz 1 rankst.{" "}
            </p>
          </section>
          <section className="relative border-b-1 border-slate-200">
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
          <section></section>
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
            <div className="mt-12 bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg">
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
            <div className="mt-12 bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg ">
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
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
