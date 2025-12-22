import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavServices = () => {
  return (
    <div>
      <div className="flex gap-16 p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl  mb-2 font-medium">Google Platz 1</h3>
          <a href="#" className="mb-1 block text-neutral-400">
            SEO-Beratung für Google Rankings
          </a>
          <a href="#" className="block text-neutral-400">
            Google SEO Optimierung
          </a>
          <div className="text-neutral-400">
            <Link to={"/kostenloser-seo-check/"}>Kostenloser SEO-Check</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl mb-2 font-medium">ChatGPT Platz 1</h3>
          <a href="#" className="mb-1 block text-neutral-400">
            GEO-Berater für KI-Sichtbarkeit
          </a>
          <a href="#" className="mb-1 block text-neutral-400">
            ChatGPT SEO
          </a>
          <a href="#" className="block text-neutral-400">
            KI-Sichtbarkeit
          </a>
          <div className="text-neutral-400">
            <Link to={"/kostenloser-geo-check/"}>Kostenloser GEO-Check</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Google Werbung</h3>
          <a href="#" className="block text-neutral-400">
            Google Ads Beratung für Google-Klicks
          </a>
          <a href="#" className="block text-neutral-400">
            Kostenloser Google-Ads-Kurs
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

export default NavServices;
