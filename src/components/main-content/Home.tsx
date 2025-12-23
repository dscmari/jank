//Title Tag der Startseite ist: Google Berater Jan Krösche | Platz 1 bei Google & ChatGPT

import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

export default function Home() {
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

  if (isMobile) {
    return <MobileHome />;
  } else if (isTablet) {
    return <div>isTableContent</div>;
  } else {
    return <DesktopHome />;
  }
}
