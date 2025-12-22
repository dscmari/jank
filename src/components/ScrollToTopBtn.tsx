import { useEffect, useState } from "react";
import ArrowTop from "../icons/ArrowTop";
import scrollToTop from "../utils/scrollToTop"
import { useLocation } from "react-router-dom";
 
export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const routePath = useLocation();


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop()
  },[routePath])

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 bg-custom-black opacity-50 rounded-4xl p-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <ArrowTop />
        </button>
      )}
    </>
  );
}
