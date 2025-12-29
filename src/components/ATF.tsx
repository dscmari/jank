import { useEffect, useState } from "react";
import ArrowRight from "../icons/ArrowRight";
import useWindowDimensions from "../utils/useWindowDimensions";

type Props = {
  title: string;
  subtitle: string;
  text: string;
  LinkComponent: React.ReactNode;
};

export default function ATF({ title, subtitle, text, LinkComponent }: Props) {
  const windowDimensions = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(windowDimensions.width < 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth < 1280
  );

  useEffect(() => {
    const resizedIsMobile = windowDimensions.width < 768;
    const resizedIsTablet = window.innerWidth > 768 && window.innerWidth < 1280;
    setIsMobile(resizedIsMobile);
    setIsTablet(resizedIsTablet);
  }, [windowDimensions]);

  return (
    <div>
      {isMobile ? (
        <div className="">
          <img
            src="/images/portraits/39321-4133web.jpg"
            alt="Portrait von Jan Krösche"
            className="w-full"
          />
          <h1 className="text-center !text-xl/8 tracking-wide p-8 pt-4">
            {title}
          </h1>
        </div>
      ) : (
        <div>
          {isTablet ? (
            <div>tablet</div>
          ) : (
            <div className="desktop-atf h-screen relative">
              <div className="p-8 rounded text-custom-white max-w-2/5 absolute top-1/2 -translate-y-1/2 left-1/8">
                <h1 className="mb-8 !text-5xl/14 tracking-wide">{title}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>
                <button className="mt-16 p-4 bg-custom-red text-custom-white rounded w-2/3 flex items-center justify-between">
                  {LinkComponent}
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
