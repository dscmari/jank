import ContactWithImg from "../ContactWithImg";
import WebsiteCheck from "../WebsiteCheck";

export default function SEOCheck() {
  return (
    <div className="2xl:mx-32">
      <WebsiteCheck className="mt-12 lg:mx-32" />
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
