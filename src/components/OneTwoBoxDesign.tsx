import ArrowRight from "../icons/ArrowRight";
import Code from "../icons/Code";
import Diamond from "../icons/Diamond";
import Magnifier from "../icons/Magnifier";
import Maps from "../icons/Maps";
import Video from "../icons/Video";
import LinkGeoCheck from "./LinkGeoCheck";
import LinkSeoCheck from "./LinkSeoCheck";

export default function OneTwoBoxDesign() {
  return (
    <section className="m-32">
      <h2 className="text-center !text-2xl">Das machen wir alles für Dich</h2>
      <div className="grid grid-cols-3 gap-2 mt-12">
        <div className="row-span-2 flex flex-col justify-between bg-custom-white leading-8 p-8 rounded-lg dark">
          <div>
            <div className="">
              <h2 className="!text-2xl tracking-wide !mb-4">Google Platz 1</h2>
              <div className="flex flex-col gap-4 text-xl py-4">
                <div className="flex items-center gap-4">
                  <Magnifier />
                  <span>Google Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Maps />
                  <span>Maps Optimierung</span>
                </div>

                <div className="flex items-center gap-4">
                  <Video />
                  <span>Youtube Kanal Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Magnifier />
                  <span>Bing Optimierung</span>
                </div>
                <div className="flex items-center gap-4">
                  <Code />
                  <span>GEO Tracker</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div className="">
                  <img
                    src="/images/google_logo.png"
                    alt="Google Logo"
                    className="h-4"
                  />
                </div>
                <div className="">
                  <img
                    src="/images/YouTube_Logo_2017.png"
                    alt="YouTube Logo"
                    className="h-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 px-4 py-2 bg-custom-red text-custom-white rounded w-full flex items-center justify-between">
            <LinkSeoCheck />
            <ArrowRight />
          </button>
        </div>
        <div className="col-span-2 flex flex-col justify-between bg-custom-white leading-8 p-8 rounded-lg">
          <div className="relative">
            <h2 className="!text-2xl tracking-wide !mb-4">Chat GPT Platz 1</h2>
            <div className="grid grid-cols-2 gap-4 text-xl py-4">
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Chat GPT Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Google KI Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Gemini Optimierung</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Perplexity Optimierung</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="">
                <img
                  src="/images/chatGPT_logo.webp"
                  alt="Google Ads"
                  className="h-4"
                />
              </div>
              <div className="">
                <img
                  src="/images/gemini_logo.png"
                  alt="Microsoft Bing Logo"
                  className="h-4"
                />
              </div>
              <div className="">
                <img
                  src="images/Perplexity_AI_logo.svg.png"
                  alt="Microsoft Bing Logo"
                  className="h-4"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-custom-red text-custom-white rounded w-1/2 flex items-center justify-between">
             <LinkGeoCheck/>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="bg-custom-red-op col-span-2 flex flex-col justify-between bg-custom-white leading-8 p-8 rounded-lg">
          <div className="">
            <h2 className="!text-2xl tracking-wide !mb-4">
              Bezahlte Werbeanzeigen
            </h2>
            <div className="grid grid-cols-2 gap-4 text-xl py-4">
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Google Ads</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>Microsoft Advertising</span>
              </div>
              <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>KI Ads</span>
              </div>
                 <div className="flex items-center gap-4">
                <Diamond className="h-4 flex-shrink-0" />
                <span>ChatGPT Shopping</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <div className="">
                <img
                  src="/images/ads_logo.png"
                  alt="Google Ads"
                  className="h-4"
                />
              </div>
              <div className="">
                <img
                  src="/images/bing.svg"
                  alt="Microsoft Bing Logo"
                  className="h-4"
                />
              </div>
            </div>

            <button className="px-4 py-2 bg-custom-red text-custom-white rounded w-1/2 flex items-center justify-between">
              <span>Mehr zu Ads</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
