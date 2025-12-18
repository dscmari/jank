import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./desktop/DesktopNavbar";

export default function Navbar() {
  const windowDimensions = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(windowDimensions.width < 768);
   const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth < 1280);

  useEffect(() => {
    const resizedIsMobile = windowDimensions.width < 768
    const resizedIsTablet = window.innerWidth > 768 && window.innerWidth < 1280
    setIsMobile(resizedIsMobile)
    setIsTablet(resizedIsTablet)
  },[windowDimensions])



  if (isMobile) {
    return <MobileNavbar />;
  } else if (isTablet) {
    return <>isTablet</>;
  } else {
    return <DesktopNavbar />;
  }
}
