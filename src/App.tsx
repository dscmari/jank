import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/main-content/Home";
import Blog from "./components/pages/Videos";
import Pricing from "./components/Pricing";
import Impressum from "./components/pages/Impressum";
import Privacy from "./components/pages/Privacy";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import References from "./components/pages/References";
import Navbar from "./components/navbar/Navbar";
import SEOCheck from "./components/pages/seo/SEOCheck";
import GEOCheck from "./components/pages/geo/GEOCheck";
import GEOKurs from "./components/pages/geo/GEOKurs";
import SEOBerater from "./components/pages/seo/SEOBerater";
import GEOBerater from "./components/pages/geo/GEOBerater";
import GEOLayout from "./components/pages/geo/GEOLayout";
import Layout from "./components/pages/Layout";
import SEOLayout from "./components/pages/seo/SEOLayout";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* routes with prefooter */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/preise/" element={<Pricing />} />
            <Route path="/referenzen/" element={<References />} />
            <Route path="/videos/" element={<Blog />} />
            <Route path="/geo-berater/" element={<GEOLayout />}>
              <Route index element={<GEOBerater />} />
              <Route path="kostenloser-geo-check/" element={<GEOCheck />} />
              <Route path="kostenloser-geo-kurs/" element={<GEOKurs />} />
            </Route>
            <Route path="seo-berater/" element={<SEOLayout />}>
              <Route index element={<SEOBerater />} />
              <Route path="seo-berater/kostenloser-seo-check/" element={<SEOCheck />} />
            </Route>
          </Route>
          {/* Routes Without prefooter */}
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
