import sections from "../../utils/referencesList";
import Diamond from "../../icons/Diamond";
import RatingStar from "../../icons/RatingStar";
import ContactWithImg from "../ContactWithImg";

export default function References() {
  return (
    <div className="mb-32 lg:m-32">
      <div className="m-8 lg:m-0 lg:max-w-2/3 lg:mb-8">
        <p className="lg:pb-8 text-3xl/10 tracking-wide font-semibold">
          {" "}
          Referenzen: Seit 2017 haben wir schon{" "}
          <span className="text-custom-red">
            über 500 Firmen-Websites auf Platz 1
          </span>{" "}
          bei Google und in die ChatGPT-Antworten katapultiert
        </p>
      </div>
      <div className="mx-8 lg:m-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {sections.map((s, index) => (
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
      <section className="flex flex-col lg:flex-row-reverse justify-center gap-24 lg:gap-16 mt-24 lg:m-32">
        <div className="flex-1 bg-custom-white leading-8 p-8 rounded-lg dark mx-8 lg:mx-0">
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
        <ContactWithImg />
      </section>
    </div>
  );
}
