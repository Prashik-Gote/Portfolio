import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      {location.pathname !== "/admin" && <Navbar />}

      <Routes>
        {/* ✅ Full Portfolio Page */}
        <Route
          path="/"
          element={
            <div ref={scrollRef}>
              <Home />

              <Expertise />
              <Skills />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* ✅ Admin Page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
