import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/main-content/Home";
import Blog from "./components/pages/Videos";
import Pricing from "./components/Pricing";
import Impressum from "./components/pages/Impressum";
import Privacy from "./components/pages/Privacy";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import References from "./components/pages/References";
import Navbar from "./components/navbar/Navbar";
import SEOCheck from "./components/pages/SEOCheck";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preise" element={<Pricing />} />
          <Route path="/referenzen" element={<References />} />
          <Route path="/kostenloser-seo-check" element={<SEOCheck />} />
          <Route path="/videos" element={<Blog />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Privacy />} />
        </Routes>
        <ScrollToTopBtn />
      </main>
      <Footer />
    </>
  );
}
export default App;
