
export default function WebsiteCheck() {
  return (
    <section className="p-16 mt-24 bg-custom-white">
      <h1 className="!text-4xl text-center !mb-8">Kostenloser Website Check</h1>
      <div className="flex flex-col gap-4">
        <p>
          Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr Anfragen
          generieren?{" "}
        </p>
        <p>
          Ich schaue mir Deine Website an und schicke Dir ein paar
          Optimierungsvorschläge als Datei per Mail zu. Komplett kostenlos.
        </p>
      </div>
      <form action="#" className="my-12 flex flex-col gap-8">
        <div>
          <span className="block text-center text-xl rounded-4xl py-4 text-custom-white bg-black/70 tracking-tight font-bold">
            Deine Website
          </span>
        </div>
        <div>
          <span className="block text-center text-xl rounded-4xl py-4 text-custom-white bg-black/70 tracking-tight font-bold">
            Deine Mail
          </span>
        </div>
        <div className="flex gap-8">
          <input type="checkbox" className="min-w-6" />
          <p className="text-sm">
            Ich stimme zu, dass meine Angaben aus diesem Formular zur
            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Mehr
            Informationen in der Datenschutzerklärung. Die habe ich gelesen und
            akzeptiert.*
          </p>
        </div>
        <button className="text-xl mt-8 px-4 py-4 text-center bg-custom-red text-custom-white rounded-4xl w-full">
       Website abschicken
        </button>
        <p className="text-xs text-center">
          Der Website Check ist komplett kostenlos
        </p>
      </form>
    </section>
  );
}
