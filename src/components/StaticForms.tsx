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
    <form onSubmit={handleSubmit} className="my-8 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
      <input type="hidden" name="apiKey" value={key} />

      <input   type="text"
      name="website"
            className="rounded text-custom-black bg-custom-white w-full p-2"
            placeholder="Deine Website"
            required/>

      <input   type="email"
      name="email"
            className="rounded text-custom-black bg-custom-white w-full p-2"
            placeholder="Deine Mail"/>

      <textarea className="hidden" name="message" placeholder="Your Message" />
        </div>


      <div className="flex items-start gap-4">
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
          className="leading-8 mt-4 px-4 py-2 text-center bg-custom-white text-custom-black rounded-xl w-full"
        >
          Website abschicken
        </button>
        <p className="text-xs text-center mt-4">
          Der Website Check ist komplett kostenlos
        </p>
      </div>
       <div>
        <span className="text-center text-lg font-semibold"> {status && <p>{status}</p>}</span>
        </div>     
     
    </form>
  );
}
