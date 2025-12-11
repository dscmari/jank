import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

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
    return <MobileContent />;
  } else if (isTablet) {
    return <div>isTableContent</div>;
  } else {
    return <DesktopContent />;
  }
}
