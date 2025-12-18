import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/main-content/Home";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Impressum from "./components/Impressum";
import Privacy from "./components/Privacy";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preise" element={<Pricing />} />
          <Route path="/referenzen" element={<Testimonials />} />
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
