
type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function ATF({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div className="h-screen">
          <div className="relative h-screen">
            <h1 className="absolute top-1/2 -translate-y-1/2 text-custom-white !text-5xl/14 text-center headline tracking-wide px-8">
              Platz 1 bei Google und Chat GPT?
            </h1>
            <img
              src="/images/test.jpg"
              alt="Portrait von Jan Krösche"
              className="w-full max-h-full"
            />
            {/* <div className="flex gap-4 absolute left-1/2 -translate-x-1/2 bottom-1/6 w-5/6 items-center justify-center">
              <button className="cta-button min-w-1/3 bg-white text-custom-blue rounded py-2 px-4 tracking-tight">
                Zum Angebot
              </button>
              <button className="cta-button min-w-1/3 bg-custom-red text-custom-white rounded py-2 px-4 tracking-tight">
                SEO Tipps
              </button>
            </div> */}

          </div>
        </div>
      ) : (
        <div>{isTablet ? <div>tablet</div> : <div>desktop</div>}</div>
      )}
    </div>
  );
}
