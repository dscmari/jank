import checkIsMobile from "./utils/checkIsMobile";
import checkIsTablet from "./utils/checkIsTablet";
import Navbar from "./components/Navbar/Navbar";
import ATF from "./components/ATF";
import MobileContent from "./components/MobileContent";
import DesktopContent from "./components/DesktopContent";

function App() {
  const isMobile = checkIsMobile();
  const isTablet = checkIsTablet();

  return (
    <>
      <Navbar isMobile={isMobile} isTablet={isTablet} />
      <ATF isMobile={isMobile} isTablet={isTablet} />
      {isMobile ? <MobileContent /> : isTablet ? <div>isTabletContent</div> : <DesktopContent />}
    </>
  );
}
export default App;
