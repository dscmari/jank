import StaticForms from "./StaticForms";

export default function WebsiteCheck() {
  return (
    <section className="p-8 lg:p-0 mt-24 lg:mt-32 bg-custom-red lg:bg-white text-custom-white max-w-[1400px] 2xl:mx-auto">
      <div className="lg:flex">
        <div className="flex-1 lg:flex lg:flex-col lg:justify-center lg:p-32 lg:pb-8 2xl:p-32 lg:bg-custom-red lg:max-w-1/2">
          <h1 className="!mb-8 ">
            Kostenloser Website Check
          </h1>
          <p className="lg:font-semibold">
            Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr Anfragen
            generieren? Ich schaue mir Deine Website an und schicke Dir ein paar
            Optimierungsvorschläge als Datei per Mail zu. Komplett kostenlos.
          </p>
          <StaticForms />
        </div>
        <div className="hidden lg:block flex-1">
          <img src="/images/portraits/39321-4133web.jpg" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
