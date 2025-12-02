export default function WebsiteCheck() {
  return (
    <section className="p-8 mt-24 bg-custom-red text-white">
      <h1 className="text-center !mb-8">Kostenloser Website Check</h1>
      <p>
        Du willst bei Google & ChatGPT auf Platz 1 kommen und mehr Anfragen
        generieren? Ich schaue mir Deine Website an und schicke Dir ein paar
        Optimierungsvorschläge als Datei per Mail zu. Komplett kostenlos.
      </p>
      <form action="#" className="my-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="rounded text-custom-black bg-custom-white w-full p-2"
            placeholder="Deine Website"
          />

          <input
            type="text"
            className="rounded text-custom-black bg-custom-white w-full p-2"
            placeholder="Deine Mail"
          />
        </div>

        <div className="flex items-start gap-4">
          <input type="checkbox" className="min-w-6" />
          <p className="text-xs">
            Ich stimme zu, dass meine Angaben aus diesem Formular zur
            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Mehr
            Informationen in der Datenschutzerklärung. Die habe ich gelesen und
            akzeptiert.
          </p>
        </div>
        <div>
          <button className="leading-8 mt-4 px-4 py-2 text-center bg-custom-white text-custom-black rounded-xl w-full">
            Website abschicken
          </button>
          <p className="text-xs text-center mt-4">
            Der Website Check ist komplett kostenlos
          </p>
        </div>
      </form>
    </section>
  );
}
