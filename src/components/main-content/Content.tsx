import { useEffect, useState } from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";

export default function Content() {
  const windowDimensions = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(windowDimensions.width < 768);

  useEffect(() => {
    const newIsMobile = windowDimensions.width < 768
    setIsMobile(newIsMobile)
  },[windowDimensions])
  if(isMobile) {
    return <MobileContent/>
  }
  else if(false) {
    return <div>isTableContent</div>
  }
  else {
    return <DesktopContent/>
  }
}
