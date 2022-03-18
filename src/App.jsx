import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Partners from "./pages/partners/Partners";
import Notfound from "./pages/notfound/Notfound";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project/Project";
import Loader from "./components/loader/Loader";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Loader />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/project/:paramsName" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
