import ArrowRight from "../icons/ArrowRight";

type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function ATF({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div className="">
          <img
            src="/images/portraits/39321-4133web.jpg"
            alt="Portrait von Jan Krösche"
            className="w-full"
          />
          <h1 className=" !text-xl/8 tracking-wide p-8 pt-4">
            Endlich Platz 1 bei Google & ChatGPT mit Deiner Website!
          </h1>
        </div>
      ) : (
        <div>
          {isTablet ? (
            <div>tablet</div>
          ) : (
            <div className="desktop-atf h-screen bg-red-500 relative">
              <div className="p-8 rounded bg-white/90 max-w-2/5 absolute top-1/2 -translate-y-1/2 left-1/8">
                <h1 className="mb-8 !text-3xl tracking-wide">
                  Endlich Platz 1 bei Google & ChatGPT mit Deiner Website!
                </h1>
                <h2>
                  Seit 2017 haben wir über 500 Firmen-Websites auf Platz 1 bei
                  Google katapultiert
                </h2>
                <p>
                  Jan Krösche & Team sind Deine SEO und SEA-Spezialisten, damit
                  Du die Nr. 1 im Netz wirst. Und mehr Neukunden gewinnst als
                  Deine Wettbewerber.
                </p>
                <button className="mt-16 mx-auto p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
                  <span>Zum Kostenlosen SEO-Check </span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
