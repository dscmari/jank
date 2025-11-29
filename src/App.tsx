import checkIsMobile from "./utils/checkIsMobile";
import checkIsTablet from "./utils/checkIsTablet";
import Navbar from "./components/Navbar";
import ATF from "./components/ATF";
import ArrowRight from "./icons/ArrowRight";
import Phone from "./icons/Phone";
import Footer from "./components/Footer";

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
            <img src="/images/portrait_2.jpg" alt="Portrait Jan Krösche" />
            <p className="mx-8 mt-2 text-sm text-thin text-center">
              Jan Krösche hat bis 2025 eine der größten
              Onlinemarketing-Agenturen in Deutschland aufgebaut und geleitet.
              Seit 2025 arbeitet er mit einem spezialisierten Team selbständig.
            </p>
            <p className="my-4 mx-8">
              Unsere Referenzen sprechen für sich.{" "}
              <span className="underline">Mach Dir selbst ein Bild.</span>{" "}
            </p>
          </section>
          <section className="bg-custom-white mx-8 leading-8 p-8 shadow-2xl rounded-lg">
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
                <span>Jan Krösche</span>
              </div>
              <ArrowRight />
            </button>
          </section>
          <section className="mt-16 mx-8 flex flex-col gap-4">
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
              Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, die Deinen
              Webauftritt so optimieren, damit Du bei Google, ChatGPT, Copilot
              und Perplexity auf Platz 1 rankst.{" "}
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
            <button className="mt-4 px-4 py-2 bg-custom-red text-custom-white rounded-4xl w-full flex items-center justify-between">
              <span>Kostenlose SEO Tipps </span>
              <ArrowRight />
            </button>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
