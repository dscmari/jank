import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/main-content/Home";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Preise" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
