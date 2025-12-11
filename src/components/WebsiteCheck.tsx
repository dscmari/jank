import StaticForms from "./StaticForms";

export default function WebsiteCheck() {
  return (
    <section className="p-8 lg:p-0 mt-24 lg:mt-32 bg-custom-red lg:bg-white text-custom-white max-w-[1400px] 2xl:mx-auto">
      <div className="lg:flex">
        <div className="flex-1 lg:flex lg:flex-col 2xl:justify-center lg:p-16 lg:pb-6 2xl:p-24 2xl:pb-6 lg:bg-custom-red lg:max-w-1/2">
          <h2 className="!text-3xl/10">
            Kostenloser Website Check
          </h2>
          <p className="lg:font-semibold">
            Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr Anfragen
            generieren? Ich schaue mir Deine Website an und schicke Dir ein paar
            Optimierungsvorschläge als Datei per Mail zu. Komplett kostenlos.
          </p>
          <StaticForms />
        </div>
        <div className="hidden lg:block flex-1">
          <img src="/images/portraits/square_portrait.jpeg" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
