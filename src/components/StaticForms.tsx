import { useState } from "react";

export default function StaticForms() {
  const [status, setStatus] = useState("");
  const key = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log(key);
    try {
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Website erfolgreich abgeschickt");
        form.reset();
      } else {
        setStatus("Ein Fehler ist aufgetreten");
      }
    } catch (error) {
      setStatus("Ein Fehler ist aufgetreten");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 lg:mb-0 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <input type="hidden" name="apiKey" value={key} />

        <div className="flex flex-col gap-4 font-semibold lg:mt-4">
          <label htmlFor="website">
            Deine Website<span className="lg:text-custom-red">*</span>
          </label>
          <input
            type="text"
            name="website"
            className="rounded text-custom-black bg-slate-200 p-2 w-full"
            placeholder="www.deineSeite.de"
            required
          />
        </div>
        <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="email">
            Deine Email-Adresse<span className="lg:text-custom-red">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            className="rounded text-custom-black bg-slate-200 p-2 w-full"
            placeholder="mustermann@office.de"
          />
        </div>
        {/* <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="message">Deine Nachricht</label>
          <textarea
            name="message"
            className="rounded text-custom-black bg-slate-200 p-2 w-full min-h-24"
            placeholder="Hast du konkrete Fragen?"
          />
        </div> */}
      </div>

      <div className="flex items-start gap-4 lg:mb-8">
        <input type="checkbox" className="min-w-6" required />
        <p className="text-xs">
          Ich stimme zu, dass meine Angaben aus diesem Formular zur Beantwortung
          meiner Anfrage erhoben und verarbeitet werden. Mehr Informationen in
          der Datenschutzerklärung. Die habe ich gelesen und akzeptiert.
        </p>
      </div>

      <div>
        <button
          type="submit"
          className="leading-8 mt-4 px-4 py-2 text-center bg-custom-white lg:bg-custom-red text-custom-black lg:text-custom-white rounded-xl w-full "
        >
          Website abschicken
        </button>
        <p className="text-xs text-center mt-4">
          Der Website Check ist komplett kostenlos
        </p>
      </div>
      <div>
        <span className="text-center text-lg font-semibold">
          {" "}
          {status && <p>{status}</p>}
        </span>
      </div>
    </form>
  );
}
