// Der Title Tag: GEO Berater Jan Krösche | Sichtbarkeit bei ChatGPT & Gemini


import ArrowRight from "../../../icons/ArrowRight";
import Diamond from "../../../icons/Diamond";

import Mail from "../../../icons/Mail";
import Phone from "../../../icons/Phone";
import RatingStar from "../../../icons/RatingStar";
import sections from "../../../utils/referencesList";

import ATF from "../../ATF";
import Contact from "../../Contact";
import LinkGeoCheck from "../../LinkGeoCheck";


export default function GEOBerater() {
  const titleATF = "Dein GEO Berater für starke KI Sichtbarkeit";
  const subtitleATF =
    "GEO Berater Jan Krösche & Team sorgen dafür, dass Deine Firma in den KI-Antworten von ChatGPT, Gemini und Copilot erscheint.";
  const textATF =
    "Wir optimieren Deine Website , damit Du in den Antworten der KI-Systeme zitiert wirst und nicht Deine Wettbewerber. Damit Du langfristig die meisten Kunden Deiner Branche gewinnst.";

  return (
    <div>
      <ATF
        title={titleATF}
        subtitle={subtitleATF}
        text={textATF}
        LinkComponent={<LinkGeoCheck />}
      />
      <section className="flex gap-12 p-32 py-24 2xl:gap-32 2xl:justify-center ">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="!text-2xl tracking-wide !mb-8">
            Mit unserer GEO Beratung wirst Du bei ChatGPT, Gemini & Co. am
            häufigsten zitiert
          </h2>
          <p>
            {" "}
            Unter „GEO“ versteht man die Optimierung für generative
            Suchmaschinen. Einfach ausgedrückt: Man optimiert Firmen-Websites
            dahingehend, dass sie extrem häufig bei ChatGPT, Gemini, Copilot und
            anderen KI-Chatsystemen auftauchen.
          </p>
          <p>
            Unseren Kunden „Schwabinger Wahrheit“ – ein Hotel in München –
            optimieren wir seit 2022 mit dem Ziel, in der KI sichtbarer zu sein.
            Für die Suchphrase (= Prompt) „Bestes Familienhotel in Schwabing“
            erscheint die Hotel-Website unseres Kunden auf Platz 1 in der
            Antwort. Genau so funktioniert die Kundengewinnung von Morgen.{" "}
          </p>
          <p>
            Wir stehen Unternehmen aus Deutschland, Österreich, Südtirol und der
            Schweiz als GEO Berater zur Seite. Wir helfen Dir, die Nummer 1 in
            der KI zu werden.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <ArrowRight />
          </button>
        </div>
        <div className="min-w-1/2 2xl:min-w-1/3 relative">
          <img
            src="/images/ki_screenshot.png"
            style={{ width: "600px" }}
            alt="Screenshot einer KI Antwort"
          />
          <p className="p-8 italic mx-auto text-center">
            "Wir helfen Unternehmen dabei, die Nummer 1 ihrer Branche werden"
          </p>
        </div>
      </section>
      <section className="lg:p-32 lg:pb-48 relative bg-custom-white">
        <div className="absolute right-12 top-12">
          <img
            src="/images/list-magnifying-glass.svg"
            alt="Symbol für eine Lupe über einer Liste"
          />
        </div>

        <div className="max-w-2/3">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold">
            Das <span className="text-custom-red">Marketing der Zukunft </span>{" "}
            hat schon begonnen: Firmen, die in der KI nicht erscheinen, gehen in
            der neuen Welt unter
          </p>
        </div>

        <div className="text-lg">
          <p>
            Ja, es ist immer noch wichtig, im Internet und vor allem bei Google
            präsent zu sein. Mit 90 Prozent hat Google immer noch den größten
            Marktanteil auf dem Suchmaschinenmarkt. KI-Chatsysteme wie ChatGPT,
            Copilot, Gemini, Claude oder Perplexity werden aber immer
            alltagsfähiger und gewinnen immer mehr Nutzer. Für Dich und Deine
            Firma bedeutet das: Du musst alles daran setzen, auch bei ChatGPT
            und Co. aufzutauchen, um künftig Anfragen generieren zu können.
          </p>
        </div>
        <Contact className="mt-12" />
      </section>
      <section className="mt-12 flex gap-12 p-32 py-24 2xl:gap-32 2xl:justify-center ">
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
        <div className="flex flex-col gap-4 2xl:max-w-1/2 3xl:max-w-1/3">
          <h2 className="!text-2xl tracking-wide !mb-8">
            Jan Krösche & Team: Deine GEO Berater für mehr Sichtbarkeit in
            KI-Systemen
          </h2>
          <p>
            Die Neukundengewinnung von Firmen ändert sich im KI-Zeitalter.
            Menschen nutzen zunehmenden KI-Chats oder gar KI-Agenten, um nach
            Antworten auf ihre Probleme zu suchen. Das bedeutet automatisch
            auch, dass Produkte und Dienstleistungen immer häufiger über
            ChatGPT, Gemini und Co. gesucht werden. „Wer ist der beste Makler in
            München?“, „Welche Laufschuhe eignen sich für Waldläufe?“, „Zeig mir
            ein zentrales, kleines Hotel in Venedig“. Menschen „prompten“ nach
            Phrasen dieser Art.
          </p>
          <p>
            Firmen, die innerhalb der KI-Antworten erscheinen, treten direkt mit
            der Zielgruppe in Kontakt. Marketingexperten aus den USA gehen davon
            aus, dass die Sichtbarkeit innerhalb von ChatGPT und Gemini zum
            wichtigsten Kundenlieferant für Unternehmen in Zukunft werden wird.{" "}
          </p>
          <p>
            Als GEO Berater haben wir uns auf dieses Thema spezialisiert. Wir
            helfen Dir, dass Deine Firmen-Website am häufigsten in den
            KI-Antworten auftauchen.
          </p>
          <button className="mt-12 p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
            <LinkGeoCheck />
            <ArrowRight />
          </button>
        </div>
      </section>
      <section className="lg:p-32 lg:pb-48 relative bg-custom-white">
        <div className="absolute right-12 top-12">
          <img
            src="/images/list-magnifying-glass.svg"
            alt="Symbol für eine Lupe über einer Liste"
          />
        </div>

        <div className="max-w-2/3">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold">
            <span className="text-custom-red">
              {" "}
              Persönliche GEO Dienstleistung
            </span>{" "}
            aus einer Hand
          </p>
        </div>
        <div className="text-lg">
          <p>
            Wir wissen, dass unsere Kunden keine GEO Profis sind und dass die
            Thematik erklärungsbedürftig ist. Aus diesem Grund verstehen wir als
            Dienstleister, der Kundenservice in der Zusammenarbeit priorisiert.
            Du erhältst kein „Ticket-System“ oder bist bei uns nur irgendeine
            Kundennummer. Bei uns hast Du einen festen GEO Berater, der sich in
            Dein Projekt einarbeitet und durchgehend für Dich zuständig ist.
            Alle GEO Dienstleistungen erfolgen aus einer Hand. Damit das
            Handling für Dich einfach ist.
          </p>
          <div className="flex gap-12 mt-24">
            <div className="bg-white flex-1 flex flex-col gap-8 justify-between leading-8 p-12 rounded-lg">
              <h2 className="text-center">
                Mehr KI-Sichtbarkeit mit Deiner Firma
              </h2>
              <p className="leading-6">
                Unsere Aufgabe ist klar: Wir bringen Deine Firmenwebsite in die
                KI-Antworten von ChatGPT, Gemini, Copilot und Perplexity, damit
                Du künftig die Nummer 1 der Branche bist und mehr Neukunden
                gewinnst. Deine Vorteile:
              </p>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>
                    Für wichtige Prompts erscheinst Du in der KI-Antwort
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Du bekommst eine hohe Sichtbarkeit in KI-Systemen</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Deine Kunden finden Dich dort, wo sie suchen</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Du ziehst an Deinen Wettbewerbern vorbei</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Du erhältst mehr Anfragen</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Du bestehst langfristig am Markt</span>
                </div>
              </div>
              <button className="mt-16 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
                <LinkGeoCheck />
                <ArrowRight />
              </button>
            </div>
            <div className="bg-white flex-1 flex flex-col gap-8 justify-between leading-8 p-12 rounded-lg">
              <h2 className="text-center">Unser Preispaket für Dich</h2>
              <p className="leading-6">
                Website-Optimierungen, damit Deine Firma in den Antworten der
                KI-Systeme ChatGPT, Gemini, Perplexity & Copilot erscheint. Und
                Du mehr Anfragen generierst.
              </p>
              <div className="flex flex-col gap-4 text-xl">
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Fester, persönlicher Ansprechpartner</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Fortlaufende Prompt-Recherchen</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Website Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Schema.org & llms.txt Umsetzung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Mindestens ein Backlink pro Monat </span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Mindestens ein Text pro Monat</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Content-Optimierung für KI-Sichtbarkeit</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Eine Digital PR Aktion pro Monat</span>
                </div>
                <div className="flex items-center gap-4 min-w-8">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>Strategie Anpassungen bei Updates</span>
                </div>
              </div>
              <div>
                <p className="text-center">Preisanfrage unter</p>
                <span className="block text-center text-custom-red">
                  jan@jankroesche.de
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-32 pb-48 pt-32">
        <div className="max-w-2/3">
          <p className="pb-8 text-3xl/10 tracking-wide font-semibold">
            Wenn Du uns als <span className="text-custom-red">GEO Betater</span>{" "}
            beauftragst, unterstützen wir Dich, damit Deine Website in den KI
            Antworten von ChatGPT und Co. zitiert wird.
          </p>
          <p className="text-3xl/10 tracking-wide font-semibold">
            So kommst Du in den KI-Antworten ganz nach oben
          </p>
        </div>

        <div className="flex gap-16 pt-12">
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Recherche
            </h3>
            <p className="">
              Wir recherchieren die Prompts, die Deine Kunden innerhalb der KI
              Systeme suchen und identifikation Deine Zielgruppe
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Optimierung
            </h3>
            <p className="">
              Wir optimieren wichtige Teile Deiner Website wie Title Tags, Meta
              Descriptions, Überschriften und weitere Inhalte
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Reichweite
            </h3>
            <p className="">
              Wir verbreiten Deine Firma im Netz über Backlinks und kleinere
              PR-Aktionen und sorgen so für mehr Aufmerksamkeit für Deine
              Website
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              Content Verbesserung
            </h3>
            <p className="">
              Wir erweitern und optimieren Deinen Content, damit die KI-Systeme
              Dich häufiger zitieren können
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold tracking-wide mb-4">
              GEO Techniken
            </h3>
            <p className="">
              Wir setzen wichtige GEO Techniken um wie llms.txt und
              schema.org-Integrationen ein, damit deine Website von den KI
              Anbietern gefunen wird
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center text-xl font-semibold bg-custom-red text-custom-white py-8 mt-24">
          <div>
            <p>Schnelle Kontaktaufnahme zu Jan Krösche</p>
          </div>
          <div className="flex gap-4 items-center">
            <Phone color="#f5f6fa" className="size-6" />
            <span>+49 176 55109383</span>
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
      <section className="mx-32">
        <div className="m-8 lg:m-0 lg:max-w-2/3 lg:mb-8">
          <p className="lg:pb-8 text-3xl/10 tracking-wide font-semibold">
           Seit 2017 haben wir schon <span className="text-custom-red">500 Firmen </span> über im SEO geholfen
          </p>
        </div>
        <div className="mx-8 lg:m-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {sections.slice(0, 4).map((s, index) => (
          <section key={index} className="flex flex-col pt-8">
            <div className="h-full bg-custom-white p-4 lg:p-8 rounded shadow-lg">
              <div className="flex gap-1">
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
                <RatingStar />
              </div>
              <h2 className="mt-8">{s.title}</h2>
              <p>{s.text}</p>
              <div className="flex flex-col gap-4 my-8">
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Google: </span>
                    {s.googleResults}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">{s.preAIresults} </span>
                    {s.aiResults}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Diamond className="h-4 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">Firma: </span>
                    {s.company}
                  </span>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      </section>
    </div>
  );
}
