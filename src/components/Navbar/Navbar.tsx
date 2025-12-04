
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function Navbar({ isMobile, isTablet }: Props) {

  if(isMobile) {
    return <MobileNavbar/>
  } else if(isTablet) {
    return <>isTablet</>
  } else {
    return <DesktopNavbar/>
  }
}
